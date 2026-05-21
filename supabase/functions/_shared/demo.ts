import {
  AgentLanguage,
  AuditAgentOutput,
  AutomationAgentOutput,
  OfferAgentOutput
} from './types.ts';

const NOTICE = {
  fr: 'Mode démo — connectez une clé OpenAI pour activer l’IA réelle.',
  it: 'Modalità demo — collega una chiave OpenAI per attivare l’IA reale.',
  en: 'Demo mode — connect an OpenAI key to enable real AI.'
} as const;

export function demoNotice(language: AgentLanguage): string {
  return NOTICE[language];
}

export function demoOffer(language: AgentLanguage, activity: string): OfferAgentOutput {
  const dict = {
    fr: {
      valueProposition: `Transformer « ${activity} » en offre claire, ciblée et vendable.`,
      targetAudience: 'Décideurs et opérationnels qui veulent un résultat mesurable, pas une promesse vague.',
      offerAngle: 'Une promesse simple : problème → système → résultat mesurable.',
      landingStructure: [
        'Hero : promesse + preuve sociale immédiate',
        'Problème : friction actuelle décrite en une phrase',
        'Système SHAKUR : message, interface, données, automation, résultat',
        'Preuves : 2-3 cas concrets ou logos',
        'CTA unique : qualification courte + créneau'
      ],
      callToAction: 'Démarrer un audit gratuit en 15 minutes.',
      nextStep: 'Transformer cette offre en une landing page premium déployable cette semaine.'
    },
    it: {
      valueProposition: `Trasformare « ${activity} » in un’offerta chiara, mirata e vendibile.`,
      targetAudience: 'Decision-maker e operativi che vogliono un risultato misurabile, non una promessa vaga.',
      offerAngle: 'Una promessa semplice: problema → sistema → risultato misurabile.',
      landingStructure: [
        'Hero: promessa + prova sociale immediata',
        'Problema: frizione attuale descritta in una frase',
        'Sistema SHAKUR: messaggio, interfaccia, dati, automazione, risultato',
        'Prove: 2-3 casi concreti o loghi',
        'CTA unica: qualificazione breve + slot'
      ],
      callToAction: 'Avvia un audit gratuito da 15 minuti.',
      nextStep: 'Trasformare l’offerta in una landing page premium pronta in una settimana.'
    },
    en: {
      valueProposition: `Turn “${activity}” into a clear, targeted, sellable offer.`,
      targetAudience: 'Decision-makers and operators who want a measurable outcome, not a vague promise.',
      offerAngle: 'One promise: problem → system → measurable result.',
      landingStructure: [
        'Hero: promise + immediate proof',
        'Problem: current friction described in one sentence',
        'SHAKUR system: message, interface, data, automation, result',
        'Proof: 2-3 concrete cases or logos',
        'Single CTA: short qualification + booking slot'
      ],
      callToAction: 'Start a free 15-minute audit.',
      nextStep: 'Turn this offer into a premium landing page deployable this week.'
    }
  } as const;
  return dict[language];
}

export function demoAudit(language: AgentLanguage, subject: string): AuditAgentOutput {
  const dict = {
    fr: {
      clarityScore: 64,
      trustScore: 58,
      conversionRisk: 'medium' as const,
      frictionPoints: [
        `La proposition de valeur de « ${subject} » n’est pas lisible en moins de cinq secondes.`,
        'Le CTA principal n’est pas visible avant le scroll.',
        'Aucune preuve sociale dans le premier écran.'
      ],
      priorityFixes: [
        'Réécrire le hero : promesse mesurable + verbe d’action.',
        'Placer un CTA unique au-dessus de la ligne de flottaison.',
        'Ajouter trois preuves (logos, chiffres ou témoignages courts).'
      ],
      cncsSuggestion: 'Refonte hero + parcours de qualification en une page SHAKUR Web System.'
    },
    it: {
      clarityScore: 64,
      trustScore: 58,
      conversionRisk: 'medium' as const,
      frictionPoints: [
        `La proposta di valore di « ${subject} » non è leggibile in meno di cinque secondi.`,
        'La CTA principale non è visibile prima dello scroll.',
        'Nessuna prova sociale nel primo schermo.'
      ],
      priorityFixes: [
        'Riscrivere l’hero: promessa misurabile + verbo d’azione.',
        'Posizionare una CTA unica sopra la piega.',
        'Aggiungere tre prove (loghi, numeri o testimonianze brevi).'
      ],
      cncsSuggestion: 'Rifacimento hero + percorso di qualificazione su una pagina SHAKUR Web System.'
    },
    en: {
      clarityScore: 64,
      trustScore: 58,
      conversionRisk: 'medium' as const,
      frictionPoints: [
        `The value proposition of “${subject}” is not readable in under five seconds.`,
        'The primary CTA is not visible above the fold.',
        'No social proof in the first viewport.'
      ],
      priorityFixes: [
        'Rewrite the hero: measurable promise + action verb.',
        'Place a single CTA above the fold.',
        'Add three proofs (logos, numbers or short testimonials).'
      ],
      cncsSuggestion: 'Hero rebuild + qualification flow on a single SHAKUR Web System page.'
    }
  } as const;
  return dict[language];
}

export function demoAutomation(language: AgentLanguage, workflow: string): AutomationAgentOutput {
  const dict = {
    fr: {
      input: `Demande entrante issue de « ${workflow} », via formulaire ou message libre.`,
      logic: 'Qualification automatique → routage → relance temporisée → handoff humain si chaud.',
      steps: [
        'Formulaire structuré qui capte les champs critiques',
        'Webhook vers un orchestrateur (n8n, Make ou Edge Function)',
        'Création d’une fiche dans le CRM avec statut, valeur et next action',
        'Confirmation automatique au client + tâche pour l’équipe',
        'Relance automatique si pas de réponse en 48 h'
      ],
      integrations: ['Form (Tally/Typeform)', 'Webhook', 'CRM (Notion/HubSpot)', 'Email transactionnel', 'WhatsApp Business API'],
      output: 'Une affaire qualifiée, traçable, relancée automatiquement jusqu’à la réponse.',
      roadmap: [
        'Cartographier le workflow actuel (1 jour)',
        'Construire le premier flux input → logic → output (3 jours)',
        'Connecter le CRM et les relances (2 jours)',
        'Mesurer le taux de réponse sur 2 semaines puis itérer'
      ]
    },
    it: {
      input: `Richiesta in ingresso da « ${workflow} », via form o messaggio libero.`,
      logic: 'Qualificazione automatica → routing → follow-up temporizzato → handoff umano se caldo.',
      steps: [
        'Form strutturato che cattura i campi critici',
        'Webhook verso un orchestratore (n8n, Make o Edge Function)',
        'Creazione di una scheda nel CRM con stato, valore e next action',
        'Conferma automatica al cliente + task per il team',
        'Follow-up automatico se nessuna risposta entro 48 h'
      ],
      integrations: ['Form (Tally/Typeform)', 'Webhook', 'CRM (Notion/HubSpot)', 'Email transazionale', 'WhatsApp Business API'],
      output: 'Un’opportunità qualificata, tracciabile, seguita automaticamente fino alla risposta.',
      roadmap: [
        'Mappare il workflow attuale (1 giorno)',
        'Costruire il primo flusso input → logic → output (3 giorni)',
        'Collegare CRM e follow-up (2 giorni)',
        'Misurare il tasso di risposta su 2 settimane, poi iterare'
      ]
    },
    en: {
      input: `Incoming request from “${workflow}”, via form or free-text message.`,
      logic: 'Automatic qualification → routing → timed follow-up → human handoff when hot.',
      steps: [
        'Structured form capturing the critical fields',
        'Webhook to an orchestrator (n8n, Make or Edge Function)',
        'Create a CRM record with status, value and next action',
        'Automatic confirmation to the client + task for the team',
        'Automatic follow-up if no reply within 48 h'
      ],
      integrations: ['Form (Tally/Typeform)', 'Webhook', 'CRM (Notion/HubSpot)', 'Transactional email', 'WhatsApp Business API'],
      output: 'A qualified, traceable opportunity, automatically followed up until reply.',
      roadmap: [
        'Map the current workflow (1 day)',
        'Build the first input → logic → output flow (3 days)',
        'Connect CRM and follow-ups (2 days)',
        'Measure reply rate over 2 weeks, then iterate'
      ]
    }
  } as const;
  return dict[language];
}
