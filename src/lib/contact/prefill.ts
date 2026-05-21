/**
 * Conversion path helpers.
 *
 * Build pre-filled WhatsApp and mailto URLs from an agent run.
 * Locale-aware. Pure functions, no DOM, no side effects.
 *
 * The "primary input" is the most meaningful free-text field the user
 * typed in the agent panel:
 *   - offer       → activity / service
 *   - audit       → URL or description
 *   - automation  → current manual workflow
 *
 * If no env vars are set, callers can detect a `null` URL and hide the
 * corresponding action. Email always falls back to a sensible default.
 */

import { AgentKind } from '../agents/types';
import { Language, TranslationKey } from '../../i18n/translations';
import { translate } from '../../i18n/config';

const PRIMARY_INPUT_TRUNCATE = 220;
const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'contact@shakurstudio.com';
const WHATSAPP_BASE = (import.meta.env.VITE_WHATSAPP_URL as string | undefined) ?? '';

function clamp(input: string): string {
  const trimmed = input.trim();
  if (trimmed.length <= PRIMARY_INPUT_TRUNCATE) return trimmed;
  return trimmed.slice(0, PRIMARY_INPUT_TRUNCATE - 1).trimEnd() + '…';
}

function bodyKeyFor(kind: AgentKind): TranslationKey {
  switch (kind) {
    case 'offer': return 'contact.prefill.body.offer';
    case 'audit': return 'contact.prefill.body.audit';
    case 'automation': return 'contact.prefill.body.automation';
  }
}

function subjectFor(language: Language, kind: AgentKind): string {
  const verb = translate(language, bodyKeyFor(kind));
  // Subject is shorter than body: take the first line only.
  const firstLine = verb.split('\n')[0]!;
  return `${translate(language, 'contact.prefill.subjectPrefix')} — ${firstLine}`;
}

function bodyFor(language: Language, kind: AgentKind, primaryInput: string): string {
  const body = translate(language, bodyKeyFor(kind));
  const footer = translate(language, 'contact.prefill.footer');
  const clean = clamp(primaryInput);
  if (!clean) return `${body}\n\n${footer}`;
  return `${body}\n\n— ${clean}\n\n${footer}`;
}

export interface PrefillTargets {
  whatsappHref: string | null;
  mailtoHref: string;
}

export function buildPrefillTargets(
  kind: AgentKind,
  primaryInput: string,
  language: Language
): PrefillTargets {
  const subject = subjectFor(language, kind);
  const body = bodyFor(language, kind, primaryInput);

  const mailtoHref =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  const whatsappHref = buildWhatsAppHref(body);

  return { whatsappHref, mailtoHref };
}

/**
 * Append a pre-filled `text` query param to the configured wa.me URL.
 * Returns null if no WhatsApp URL is configured at build time.
 */
function buildWhatsAppHref(message: string): string | null {
  if (!WHATSAPP_BASE) return null;
  const separator = WHATSAPP_BASE.includes('?') ? '&' : '?';
  return `${WHATSAPP_BASE}${separator}text=${encodeURIComponent(message)}`;
}
