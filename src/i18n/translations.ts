export type Language = 'fr' | 'it' | 'en';

export type TranslationKey =
  | 'nav.agents'
  | 'nav.systems'
  | 'nav.process'
  | 'nav.contact'
  | 'cta.start'
  | 'cta.build'
  | 'cta.whatsapp'
  | 'a11y.brand'
  | 'a11y.nav'
  | 'a11y.language'
  | 'hero.kicker'
  | 'hero.titleA'
  | 'hero.titleB'
  | 'hero.titleC'
  | 'hero.copy'
  | 'hero.explore'
  | 'hero.project'
  | 'hero.builtBy'
  | 'hero.demo.input'
  | 'hero.demo.inputBody'
  | 'hero.demo.engine'
  | 'hero.demo.engineBody'
  | 'hero.demo.output'
  | 'hero.demo.outputBody'
  | 'agents.kicker'
  | 'agents.title'
  | 'agents.copy'
  | 'agents.console.tabsLabel'
  | 'agents.console.eyebrow'
  | 'agents.tryExample'
  | 'agents.loading'
  | 'agents.result'
  | 'agents.resultDemo'
  | 'agents.reset'
  | 'agents.runAgain'
  | 'agents.turnIntoSystem'
  | 'agents.demoNotice'
  | 'agents.errorRateLimit'
  | 'agents.errorTimeout'
  | 'agents.errorInvalid'
  | 'agents.errorNetwork'
  | 'agents.errorNotConfigured'
  | 'agents.errorGeneric'
  | 'agents.offer.title'
  | 'agents.offer.copy'
  | 'agents.offer.cta'
  | 'agents.offer.activityLabel'
  | 'agents.offer.activityPlaceholder'
  | 'agents.offer.activityExample'
  | 'agents.offer.audienceLabel'
  | 'agents.offer.audiencePlaceholder'
  | 'agents.offer.audienceExample'
  | 'agents.offer.goalLabel'
  | 'agents.offer.goalPlaceholder'
  | 'agents.offer.goalExample'
  | 'agents.offer.toneLabel'
  | 'agents.offer.tone.expert'
  | 'agents.offer.tone.direct'
  | 'agents.offer.tone.premium'
  | 'agents.offer.tone.friendly'
  | 'agents.offer.angleLabel'
  | 'agents.offer.structureLabel'
  | 'agents.offer.ctaLabel'
  | 'agents.audit.title'
  | 'agents.audit.copy'
  | 'agents.audit.cta'
  | 'agents.audit.subjectLabel'
  | 'agents.audit.subjectPlaceholder'
  | 'agents.audit.subjectExample'
  | 'agents.audit.audienceLabel'
  | 'agents.audit.audiencePlaceholder'
  | 'agents.audit.audienceExample'
  | 'agents.audit.objectiveLabel'
  | 'agents.audit.objectivePlaceholder'
  | 'agents.audit.objectiveExample'
  | 'agents.audit.clarityLabel'
  | 'agents.audit.trustLabel'
  | 'agents.audit.riskLabel'
  | 'agents.audit.riskLow'
  | 'agents.audit.riskMedium'
  | 'agents.audit.riskHigh'
  | 'agents.audit.frictionLabel'
  | 'agents.audit.fixesLabel'
  | 'agents.automation.title'
  | 'agents.automation.copy'
  | 'agents.automation.cta'
  | 'agents.auto.workflowLabel'
  | 'agents.auto.workflowPlaceholder'
  | 'agents.auto.workflowExample'
  | 'agents.auto.toolsLabel'
  | 'agents.auto.toolsPlaceholder'
  | 'agents.auto.toolsExample'
  | 'agents.auto.resultLabel'
  | 'agents.auto.resultPlaceholder'
  | 'agents.auto.resultExample'
  | 'agents.auto.inputLabel'
  | 'agents.auto.logicLabel'
  | 'agents.auto.outputLabel'
  | 'agents.auto.stepsLabel'
  | 'agents.auto.integrationsLabel'
  | 'agents.auto.roadmapLabel'
  | 'agents.example.fill'
  | 'systems.kicker'
  | 'systems.title'
  | 'systems.web.title'
  | 'systems.web.copy'
  | 'systems.ai.title'
  | 'systems.ai.copy'
  | 'systems.auto.title'
  | 'systems.auto.copy'
  | 'process.kicker'
  | 'process.title'
  | 'process.copy'
  | 'process.message'
  | 'process.messageBody'
  | 'process.interface'
  | 'process.interfaceBody'
  | 'process.data'
  | 'process.dataBody'
  | 'process.automation'
  | 'process.automationBody'
  | 'process.result'
  | 'process.resultBody'
  | 'final.title'
  | 'final.copy'
  | 'contact.kicker'
  | 'contact.action.whatsapp'
  | 'contact.action.email'
  | 'contact.action.scroll'
  | 'contact.prefill.subjectPrefix'
  | 'contact.prefill.body.offer'
  | 'contact.prefill.body.audit'
  | 'contact.prefill.body.automation'
  | 'contact.prefill.footer'
  | 'footer.signature'
  | 'footer.tagline';

type Dictionary = Record<TranslationKey, string>;

export const translations: Record<Language, Dictionary> = {
  fr: {
    'nav.agents': 'Agents',
    'nav.systems': 'Systèmes',
    'nav.process': 'Méthode',
    'nav.contact': 'Contact',
    'cta.start': 'Démarrer un projet',
    'cta.build': 'Construire mon système',
    'cta.whatsapp': 'WhatsApp',
    'a11y.brand': 'SHAKUR Studio — accueil',
    'a11y.nav': 'Navigation principale',
    'a11y.language': 'Sélecteur de langue',
    'hero.kicker': 'AI · Web · Automation',
    'hero.titleA': 'Pas seulement des sites.',
    'hero.titleB': 'Des systèmes qui pensent,',
    'hero.titleC': 'guident et automatisent.',
    'hero.copy': 'SHAKUR Studio transforme une offre, un workflow ou une idée en système digital intelligent — pensé pour la clarté, la conversion et l’exécution.',
    'hero.explore': 'Tester les agents',
    'hero.project': 'Construire mon système',
    'hero.builtBy': 'Construit par SHAKUR',
    'hero.demo.input': 'Entrée',
    'hero.demo.inputBody': '« Je veux plus de clients qualifiés. »',
    'hero.demo.engine': 'SHAKUR Engine',
    'hero.demo.engineBody': 'Offre → Interface → Workflow',
    'hero.demo.output': 'Sortie',
    'hero.demo.outputBody': 'Angle de landing · Capture de lead · Relance automatique',
    'agents.kicker': 'Démonstration vivante',
    'agents.title': 'Trois agents, en façade.',
    'agents.copy': 'Décris un projet. L’agent renvoie un plan structuré, prêt à exécuter. Pas de slides. Pas de promesses.',
    'agents.console.tabsLabel': 'Choisir l’agent',
    'agents.console.eyebrow': 'Console',
    'agents.tryExample': 'Pré-remplir un exemple',
    'agents.loading': 'L’agent réfléchit…',
    'agents.result': 'Résultat',
    'agents.resultDemo': 'Résultat (démo)',
    'agents.reset': 'Réinitialiser',
    'agents.runAgain': 'Relancer',
    'agents.turnIntoSystem': 'En faire un système SHAKUR',
    'agents.demoNotice': 'Mode démo — la sortie est prédéfinie, pas générée.',
    'agents.errorRateLimit': 'Trop de requêtes. Réessaie dans un instant.',
    'agents.errorTimeout': 'L’agent a mis trop de temps à répondre.',
    'agents.errorInvalid': 'Entrée invalide. Vérifie les champs.',
    'agents.errorNetwork': 'Impossible de joindre l’API. Vérifie ta connexion.',
    'agents.errorNotConfigured': 'API non configurée. Renseigne VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.',
    'agents.errorGeneric': 'L’agent a rencontré une erreur. Réessaie.',
    'agents.offer.title': 'Offer Agent',
    'agents.offer.copy': 'Transforme une activité en offre lisible, ciblée et vendable.',
    'agents.offer.cta': 'Générer l’offre',
    'agents.offer.activityLabel': 'Activité ou service',
    'agents.offer.activityPlaceholder': 'Ex : studio de design pour fintechs B2B.',
    'agents.offer.activityExample': 'Studio de design qui aide les fintechs B2B à lancer leur premier produit SaaS.',
    'agents.offer.audienceLabel': 'Client cible',
    'agents.offer.audiencePlaceholder': 'Ex : CTO de startup pré-seed',
    'agents.offer.audienceExample': 'CTO de fintechs Series A en Europe',
    'agents.offer.goalLabel': 'Objectif',
    'agents.offer.goalPlaceholder': 'Ex : 3 RDV qualifiés / semaine',
    'agents.offer.goalExample': 'Obtenir 3 RDV qualifiés par semaine',
    'agents.offer.toneLabel': 'Ton',
    'agents.offer.tone.expert': 'Expert',
    'agents.offer.tone.direct': 'Direct',
    'agents.offer.tone.premium': 'Premium',
    'agents.offer.tone.friendly': 'Amical',
    'agents.offer.angleLabel': 'Angle',
    'agents.offer.structureLabel': 'Structure landing',
    'agents.offer.ctaLabel': 'Call to action',
    'agents.audit.title': 'Audit Agent',
    'agents.audit.copy': 'Colle une URL ou décris une activité. Reçois un audit clarté · confiance · conversion.',
    'agents.audit.cta': 'Auditer la présence',
    'agents.audit.subjectLabel': 'URL ou description',
    'agents.audit.subjectPlaceholder': 'Colle une URL ou décris ton activité…',
    'agents.audit.subjectExample': 'https://exemple.com — landing d’une agence vendant des data warehouses',
    'agents.audit.audienceLabel': 'Client cible',
    'agents.audit.audiencePlaceholder': 'Ex : PME 10-50 personnes',
    'agents.audit.audienceExample': 'PME industrielles 10-50 personnes',
    'agents.audit.objectiveLabel': 'Objectif principal',
    'agents.audit.objectivePlaceholder': 'Ex : générer des leads B2B qualifiés',
    'agents.audit.objectiveExample': 'Générer des leads B2B qualifiés',
    'agents.audit.clarityLabel': 'Clarté',
    'agents.audit.trustLabel': 'Confiance',
    'agents.audit.riskLabel': 'Risque conversion',
    'agents.audit.riskLow': 'faible',
    'agents.audit.riskMedium': 'moyen',
    'agents.audit.riskHigh': 'élevé',
    'agents.audit.frictionLabel': 'Frictions',
    'agents.audit.fixesLabel': 'Corrections prioritaires',
    'agents.automation.title': 'Automation Agent',
    'agents.automation.copy': 'Décris un workflow manuel. Reçois la chaîne complète d’automatisation.',
    'agents.automation.cta': 'Cartographier le workflow',
    'agents.auto.workflowLabel': 'Workflow manuel actuel',
    'agents.auto.workflowPlaceholder': 'Ex : je reçois des demandes par email, je réponds à la main, je relance manuellement…',
    'agents.auto.workflowExample': 'Je reçois des demandes par email, je réponds avec un devis manuel, je relance chaque semaine à la main.',
    'agents.auto.toolsLabel': 'Outils utilisés',
    'agents.auto.toolsPlaceholder': 'Ex : Gmail, Notion, WhatsApp',
    'agents.auto.toolsExample': 'Gmail, Notion, WhatsApp Business',
    'agents.auto.resultLabel': 'Résultat souhaité',
    'agents.auto.resultPlaceholder': 'Ex : qualifier et relancer automatiquement',
    'agents.auto.resultExample': 'Qualifier et relancer automatiquement les leads chauds',
    'agents.auto.inputLabel': 'Entrée',
    'agents.auto.logicLabel': 'Logique',
    'agents.auto.outputLabel': 'Sortie',
    'agents.auto.stepsLabel': 'Étapes d’automatisation',
    'agents.auto.integrationsLabel': 'Outils & intégrations',
    'agents.auto.roadmapLabel': 'Roadmap d’implémentation',
    'agents.example.fill': 'Exemple',
    'systems.kicker': 'Ce que SHAKUR construit',
    'systems.title': 'Des systèmes, pas du décor.',
    'systems.web.title': 'Web Systems',
    'systems.web.copy': 'Des sites et interfaces qui transforment des visiteurs en demandes qualifiées.',
    'systems.ai.title': 'AI Interfaces',
    'systems.ai.copy': 'Des interfaces IA qui guident les utilisateurs, structurent les décisions et réduisent le travail manuel.',
    'systems.auto.title': 'Automation',
    'systems.auto.copy': 'Des workflows automatisés qui suppriment les relances manuelles et la friction opérationnelle.',
    'process.kicker': 'Méthode SHAKUR',
    'process.title': 'Chaque système SHAKUR suit une seule chaîne.',
    'process.copy': 'Pas de mystère, pas de promesses vagues. Cinq étapes opérationnelles qui structurent toute mission.',
    'process.message': 'Message',
    'process.messageBody': 'Clarifier la promesse, le client et le résultat attendu.',
    'process.interface': 'Interface',
    'process.interfaceBody': 'Concevoir le point de contact qui convertit ou qualifie.',
    'process.data': 'Données',
    'process.dataBody': 'Structurer les informations utiles à la décision et au suivi.',
    'process.automation': 'Automation',
    'process.automationBody': 'Connecter les outils pour supprimer la charge manuelle.',
    'process.result': 'Résultat',
    'process.resultBody': 'Un résultat mesurable, observable et exploitable.',
    'final.title': 'Tu n’as pas besoin d’un site. Tu as besoin d’un système.',
    'final.copy': 'Décris ton contexte. SHAKUR Studio revient sous 24 h avec un plan de système ciblé, pas un devis générique.',
    'contact.kicker': 'Construisons ton système',
    'contact.action.whatsapp': 'Envoyer sur WhatsApp',
    'contact.action.email': 'Envoyer par email',
    'contact.action.scroll': 'Voir le formulaire de contact',
    'contact.prefill.subjectPrefix': 'SHAKUR STUDIO',
    'contact.prefill.body.offer': 'Bonjour, je viens d’utiliser l’Offer Agent sur shakurstudio.com. J’aimerais transformer cette offre en système exécutable.',
    'contact.prefill.body.audit': 'Bonjour, je viens d’utiliser l’Audit Agent sur shakurstudio.com. J’aimerais discuter des corrections prioritaires et de leur mise en œuvre.',
    'contact.prefill.body.automation': 'Bonjour, je viens d’utiliser l’Automation Agent sur shakurstudio.com. J’aimerais cadrer la mise en place du workflow proposé.',
    'contact.prefill.footer': 'Envoyé depuis shakurstudio.com',
    'footer.signature': 'Construit par SHAKUR.',
    'footer.tagline': 'Pour les entreprises qui ont besoin de systèmes, pas de décoration.'
  },
  it: {
    'nav.agents': 'Agenti',
    'nav.systems': 'Sistemi',
    'nav.process': 'Metodo',
    'nav.contact': 'Contatto',
    'cta.start': 'Avvia un progetto',
    'cta.build': 'Costruisci il mio sistema',
    'cta.whatsapp': 'WhatsApp',
    'a11y.brand': 'SHAKUR Studio — home',
    'a11y.nav': 'Navigazione principale',
    'a11y.language': 'Selettore lingua',
    'hero.kicker': 'AI · Web · Automation',
    'hero.titleA': 'Non solo siti web.',
    'hero.titleB': 'Sistemi che pensano,',
    'hero.titleC': 'guidano e automatizzano.',
    'hero.copy': 'SHAKUR Studio trasforma un’offerta, un workflow o un’idea in un sistema digitale intelligente — pensato per chiarezza, conversione ed esecuzione.',
    'hero.explore': 'Provare gli agenti',
    'hero.project': 'Costruisci il mio sistema',
    'hero.builtBy': 'Costruito da SHAKUR',
    'hero.demo.input': 'Input',
    'hero.demo.inputBody': '« Voglio più clienti qualificati. »',
    'hero.demo.engine': 'SHAKUR Engine',
    'hero.demo.engineBody': 'Offerta → Interfaccia → Workflow',
    'hero.demo.output': 'Output',
    'hero.demo.outputBody': 'Angolo di landing · Cattura lead · Follow-up automatico',
    'agents.kicker': 'Demo viva',
    'agents.title': 'Tre agenti, in vetrina.',
    'agents.copy': 'Descrivi un progetto. L’agente restituisce un piano strutturato, pronto da eseguire. Senza slide, senza promesse.',
    'agents.console.tabsLabel': 'Scegli l’agente',
    'agents.console.eyebrow': 'Console',
    'agents.tryExample': 'Precompila un esempio',
    'agents.loading': 'L’agente sta pensando…',
    'agents.result': 'Risultato',
    'agents.resultDemo': 'Risultato (demo)',
    'agents.reset': 'Reset',
    'agents.runAgain': 'Riprova',
    'agents.turnIntoSystem': 'Trasformare in sistema SHAKUR',
    'agents.demoNotice': 'Modalità demo — output predefinito, non generato.',
    'agents.errorRateLimit': 'Troppe richieste. Riprova tra un istante.',
    'agents.errorTimeout': 'L’agente ha impiegato troppo tempo a rispondere.',
    'agents.errorInvalid': 'Input non valido. Controlla i campi.',
    'agents.errorNetwork': 'Impossibile raggiungere l’API. Verifica la connessione.',
    'agents.errorNotConfigured': 'API non configurata. Imposta VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.',
    'agents.errorGeneric': 'L’agente ha incontrato un errore. Riprova.',
    'agents.offer.title': 'Offer Agent',
    'agents.offer.copy': 'Trasforma un’attività in un’offerta leggibile, mirata e vendibile.',
    'agents.offer.cta': 'Generare l’offerta',
    'agents.offer.activityLabel': 'Attività o servizio',
    'agents.offer.activityPlaceholder': 'Es: studio di design per fintech B2B.',
    'agents.offer.activityExample': 'Studio di design che aiuta le fintech B2B a lanciare il primo prodotto SaaS.',
    'agents.offer.audienceLabel': 'Cliente target',
    'agents.offer.audiencePlaceholder': 'Es: CTO di startup pre-seed',
    'agents.offer.audienceExample': 'CTO di fintech Series A in Europa',
    'agents.offer.goalLabel': 'Obiettivo',
    'agents.offer.goalPlaceholder': 'Es: 3 call qualificate / settimana',
    'agents.offer.goalExample': 'Ottenere 3 call qualificate a settimana',
    'agents.offer.toneLabel': 'Tono',
    'agents.offer.tone.expert': 'Esperto',
    'agents.offer.tone.direct': 'Diretto',
    'agents.offer.tone.premium': 'Premium',
    'agents.offer.tone.friendly': 'Amichevole',
    'agents.offer.angleLabel': 'Angolo',
    'agents.offer.structureLabel': 'Struttura landing',
    'agents.offer.ctaLabel': 'Call to action',
    'agents.audit.title': 'Audit Agent',
    'agents.audit.copy': 'Inserisci un URL o descrivi un’attività. Ricevi un audit chiarezza · fiducia · conversione.',
    'agents.audit.cta': 'Auditare la presenza',
    'agents.audit.subjectLabel': 'URL o descrizione',
    'agents.audit.subjectPlaceholder': 'Inserisci un URL o descrivi la tua attività…',
    'agents.audit.subjectExample': 'https://esempio.com — landing di un’agenzia che vende data warehouse',
    'agents.audit.audienceLabel': 'Cliente target',
    'agents.audit.audiencePlaceholder': 'Es: PMI 10-50 persone',
    'agents.audit.audienceExample': 'PMI industriali 10-50 persone',
    'agents.audit.objectiveLabel': 'Obiettivo principale',
    'agents.audit.objectivePlaceholder': 'Es: generare lead B2B qualificati',
    'agents.audit.objectiveExample': 'Generare lead B2B qualificati',
    'agents.audit.clarityLabel': 'Chiarezza',
    'agents.audit.trustLabel': 'Fiducia',
    'agents.audit.riskLabel': 'Rischio conversione',
    'agents.audit.riskLow': 'basso',
    'agents.audit.riskMedium': 'medio',
    'agents.audit.riskHigh': 'alto',
    'agents.audit.frictionLabel': 'Frizioni',
    'agents.audit.fixesLabel': 'Correzioni prioritarie',
    'agents.automation.title': 'Automation Agent',
    'agents.automation.copy': 'Descrivi un workflow manuale. Ricevi la catena completa di automazione.',
    'agents.automation.cta': 'Mappare il workflow',
    'agents.auto.workflowLabel': 'Workflow manuale attuale',
    'agents.auto.workflowPlaceholder': 'Es: ricevo richieste via email, rispondo a mano, faccio follow-up manualmente…',
    'agents.auto.workflowExample': 'Ricevo richieste via email, rispondo con un preventivo manuale, faccio follow-up ogni settimana a mano.',
    'agents.auto.toolsLabel': 'Strumenti utilizzati',
    'agents.auto.toolsPlaceholder': 'Es: Gmail, Notion, WhatsApp',
    'agents.auto.toolsExample': 'Gmail, Notion, WhatsApp Business',
    'agents.auto.resultLabel': 'Risultato desiderato',
    'agents.auto.resultPlaceholder': 'Es: qualificare e seguire automaticamente',
    'agents.auto.resultExample': 'Qualificare e seguire automaticamente i lead caldi',
    'agents.auto.inputLabel': 'Input',
    'agents.auto.logicLabel': 'Logica',
    'agents.auto.outputLabel': 'Output',
    'agents.auto.stepsLabel': 'Passaggi di automazione',
    'agents.auto.integrationsLabel': 'Strumenti & integrazioni',
    'agents.auto.roadmapLabel': 'Roadmap di implementazione',
    'agents.example.fill': 'Esempio',
    'systems.kicker': 'Cosa costruisce SHAKUR',
    'systems.title': 'Sistemi, non decorazione.',
    'systems.web.title': 'Web Systems',
    'systems.web.copy': 'Siti e interfacce che trasformano i visitatori in richieste qualificate.',
    'systems.ai.title': 'AI Interfaces',
    'systems.ai.copy': 'Interfacce IA che guidano gli utenti, strutturano le decisioni e riducono il lavoro manuale.',
    'systems.auto.title': 'Automation',
    'systems.auto.copy': 'Workflow automatizzati che eliminano follow-up manuali e attriti operativi.',
    'process.kicker': 'Metodo SHAKUR',
    'process.title': 'Ogni sistema SHAKUR segue una sola catena.',
    'process.copy': 'Nessun mistero, nessuna promessa vaga. Cinque tappe operative che strutturano ogni missione.',
    'process.message': 'Messaggio',
    'process.messageBody': 'Chiarire la promessa, il cliente e il risultato atteso.',
    'process.interface': 'Interfaccia',
    'process.interfaceBody': 'Progettare il punto di contatto che converte o qualifica.',
    'process.data': 'Dati',
    'process.dataBody': 'Strutturare le informazioni utili a decisione e follow-up.',
    'process.automation': 'Automation',
    'process.automationBody': 'Connettere gli strumenti per rimuovere il carico manuale.',
    'process.result': 'Risultato',
    'process.resultBody': 'Un risultato misurabile, osservabile e sfruttabile.',
    'final.title': 'Non ti serve un sito. Ti serve un sistema.',
    'final.copy': 'Descrivi il contesto. SHAKUR Studio torna entro 24 h con un piano di sistema mirato, non un preventivo generico.',
    'contact.kicker': 'Costruiamo il tuo sistema',
    'contact.action.whatsapp': 'Invia su WhatsApp',
    'contact.action.email': 'Invia via email',
    'contact.action.scroll': 'Vai al modulo di contatto',
    'contact.prefill.subjectPrefix': 'SHAKUR STUDIO',
    'contact.prefill.body.offer': 'Ciao, ho appena usato l’Offer Agent su shakurstudio.com. Vorrei trasformare questa offerta in un sistema operativo.',
    'contact.prefill.body.audit': 'Ciao, ho appena usato l’Audit Agent su shakurstudio.com. Vorrei discutere le correzioni prioritarie e la loro implementazione.',
    'contact.prefill.body.automation': 'Ciao, ho appena usato l’Automation Agent su shakurstudio.com. Vorrei inquadrare l’implementazione del workflow proposto.',
    'contact.prefill.footer': 'Inviato da shakurstudio.com',
    'footer.signature': 'Costruito da SHAKUR.',
    'footer.tagline': 'Per aziende che hanno bisogno di sistemi, non di decorazione.'
  },
  en: {
    'nav.agents': 'Agents',
    'nav.systems': 'Systems',
    'nav.process': 'Method',
    'nav.contact': 'Contact',
    'cta.start': 'Start a project',
    'cta.build': 'Build my system',
    'cta.whatsapp': 'WhatsApp',
    'a11y.brand': 'SHAKUR Studio — home',
    'a11y.nav': 'Primary navigation',
    'a11y.language': 'Language selector',
    'hero.kicker': 'AI · Web · Automation',
    'hero.titleA': 'Not just websites.',
    'hero.titleB': 'Systems that think,',
    'hero.titleC': 'guide and automate.',
    'hero.copy': 'SHAKUR Studio turns offers, workflows and ideas into intelligent digital systems — built for clarity, conversion and execution.',
    'hero.explore': 'Try the agents',
    'hero.project': 'Build my system',
    'hero.builtBy': 'Built by SHAKUR',
    'hero.demo.input': 'Input',
    'hero.demo.inputBody': '“I need more qualified clients.”',
    'hero.demo.engine': 'SHAKUR Engine',
    'hero.demo.engineBody': 'Offer → Interface → Workflow',
    'hero.demo.output': 'Output',
    'hero.demo.outputBody': 'Landing angle · Lead capture · Follow-up automation',
    'agents.kicker': 'Live demo',
    'agents.title': 'Three agents, on the front line.',
    'agents.copy': 'Describe a project. The agent returns a structured plan, ready to execute. No slides, no promises.',
    'agents.console.tabsLabel': 'Choose the agent',
    'agents.console.eyebrow': 'Console',
    'agents.tryExample': 'Pre-fill an example',
    'agents.loading': 'Agent is thinking…',
    'agents.result': 'Result',
    'agents.resultDemo': 'Result (demo)',
    'agents.reset': 'Reset',
    'agents.runAgain': 'Run again',
    'agents.turnIntoSystem': 'Turn this into a SHAKUR system',
    'agents.demoNotice': 'Demo mode — output is preset, not generated.',
    'agents.errorRateLimit': 'Too many requests. Try again in a moment.',
    'agents.errorTimeout': 'The agent took too long to respond.',
    'agents.errorInvalid': 'Invalid input. Check the fields.',
    'agents.errorNetwork': 'Unable to reach the API. Check your connection.',
    'agents.errorNotConfigured': 'API not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
    'agents.errorGeneric': 'The agent ran into an error. Please retry.',
    'agents.offer.title': 'Offer Agent',
    'agents.offer.copy': 'Turns an activity into a readable, targeted, sellable offer.',
    'agents.offer.cta': 'Generate offer',
    'agents.offer.activityLabel': 'Activity or service',
    'agents.offer.activityPlaceholder': 'E.g. design studio for B2B fintechs.',
    'agents.offer.activityExample': 'Design studio helping B2B fintechs launch their first SaaS product.',
    'agents.offer.audienceLabel': 'Target customer',
    'agents.offer.audiencePlaceholder': 'E.g. CTO of a pre-seed startup',
    'agents.offer.audienceExample': 'CTOs of Series A fintechs in Europe',
    'agents.offer.goalLabel': 'Goal',
    'agents.offer.goalPlaceholder': 'E.g. 3 qualified calls / week',
    'agents.offer.goalExample': 'Book 3 qualified calls per week',
    'agents.offer.toneLabel': 'Tone',
    'agents.offer.tone.expert': 'Expert',
    'agents.offer.tone.direct': 'Direct',
    'agents.offer.tone.premium': 'Premium',
    'agents.offer.tone.friendly': 'Friendly',
    'agents.offer.angleLabel': 'Angle',
    'agents.offer.structureLabel': 'Landing structure',
    'agents.offer.ctaLabel': 'Call to action',
    'agents.audit.title': 'Audit Agent',
    'agents.audit.copy': 'Paste a URL or describe an activity. Get a clarity · trust · conversion audit.',
    'agents.audit.cta': 'Audit presence',
    'agents.audit.subjectLabel': 'URL or description',
    'agents.audit.subjectPlaceholder': 'Paste a URL or describe your business…',
    'agents.audit.subjectExample': 'https://example.com — agency landing selling data warehouses',
    'agents.audit.audienceLabel': 'Target customer',
    'agents.audit.audiencePlaceholder': 'E.g. SMBs 10-50 people',
    'agents.audit.audienceExample': 'Industrial SMBs with 10-50 people',
    'agents.audit.objectiveLabel': 'Main objective',
    'agents.audit.objectivePlaceholder': 'E.g. generate qualified B2B leads',
    'agents.audit.objectiveExample': 'Generate qualified B2B leads',
    'agents.audit.clarityLabel': 'Clarity',
    'agents.audit.trustLabel': 'Trust',
    'agents.audit.riskLabel': 'Conversion risk',
    'agents.audit.riskLow': 'low',
    'agents.audit.riskMedium': 'medium',
    'agents.audit.riskHigh': 'high',
    'agents.audit.frictionLabel': 'Friction',
    'agents.audit.fixesLabel': 'Priority fixes',
    'agents.automation.title': 'Automation Agent',
    'agents.automation.copy': 'Describe a manual workflow. Get the full automation chain.',
    'agents.automation.cta': 'Map workflow',
    'agents.auto.workflowLabel': 'Current manual workflow',
    'agents.auto.workflowPlaceholder': 'E.g. I get requests by email, I reply by hand, I follow up manually…',
    'agents.auto.workflowExample': 'I get inbound requests by email, reply manually with quotes, then follow up by hand each week.',
    'agents.auto.toolsLabel': 'Tools currently used',
    'agents.auto.toolsPlaceholder': 'E.g. Gmail, Notion, WhatsApp',
    'agents.auto.toolsExample': 'Gmail, Notion, WhatsApp Business',
    'agents.auto.resultLabel': 'Desired result',
    'agents.auto.resultPlaceholder': 'E.g. automatically qualify and follow up',
    'agents.auto.resultExample': 'Automatically qualify and follow up hot leads',
    'agents.auto.inputLabel': 'Input',
    'agents.auto.logicLabel': 'Logic',
    'agents.auto.outputLabel': 'Output',
    'agents.auto.stepsLabel': 'Automation steps',
    'agents.auto.integrationsLabel': 'Tools & integrations',
    'agents.auto.roadmapLabel': 'Implementation roadmap',
    'agents.example.fill': 'Example',
    'systems.kicker': 'What SHAKUR builds',
    'systems.title': 'Systems, not decoration.',
    'systems.web.title': 'Web Systems',
    'systems.web.copy': 'Websites and interfaces that turn visitors into qualified requests.',
    'systems.ai.title': 'AI Interfaces',
    'systems.ai.copy': 'AI interfaces that guide users, structure decisions and reduce manual work.',
    'systems.auto.title': 'Automation',
    'systems.auto.copy': 'Automated workflows that remove manual follow-ups and operational friction.',
    'process.kicker': 'SHAKUR method',
    'process.title': 'Every SHAKUR system follows one chain.',
    'process.copy': 'No mystery, no vague promises. Five operational stages that structure every mission.',
    'process.message': 'Message',
    'process.messageBody': 'Clarify the promise, the customer, and the expected outcome.',
    'process.interface': 'Interface',
    'process.interfaceBody': 'Design the contact point that converts or qualifies.',
    'process.data': 'Data',
    'process.dataBody': 'Structure the information useful to decisions and follow-up.',
    'process.automation': 'Automation',
    'process.automationBody': 'Connect the tools to remove the manual load.',
    'process.result': 'Result',
    'process.resultBody': 'A measurable, observable, exploitable outcome.',
    'final.title': 'You don’t need a website. You need a system.',
    'final.copy': 'Describe your context. SHAKUR Studio comes back within 24 h with a targeted system plan, not a generic quote.',
    'contact.kicker': 'Let’s build your system',
    'contact.action.whatsapp': 'Send on WhatsApp',
    'contact.action.email': 'Send by email',
    'contact.action.scroll': 'See the contact form',
    'contact.prefill.subjectPrefix': 'SHAKUR STUDIO',
    'contact.prefill.body.offer': 'Hi — I just used the Offer Agent on shakurstudio.com. I’d like to turn this offer into an operational system.',
    'contact.prefill.body.audit': 'Hi — I just used the Audit Agent on shakurstudio.com. I’d like to discuss the priority fixes and how to ship them.',
    'contact.prefill.body.automation': 'Hi — I just used the Automation Agent on shakurstudio.com. I’d like to scope the implementation of the proposed workflow.',
    'contact.prefill.footer': 'Sent from shakurstudio.com',
    'footer.signature': 'Built by SHAKUR.',
    'footer.tagline': 'For businesses that need systems, not decoration.'
  }
};
