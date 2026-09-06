// DONNÉES POUR LA PAGE : "LES BASES" (/guide)
export const guides = [
  {
    id: "1",
    title: "1. Qu'est-ce que la BRVM ?",
    content: "La Bourse Régionale des Valeurs Mobilières (BRVM) est le marché financier commun aux 8 pays de l'UEMOA (Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal, Togo). Elle est basée à Abidjan. Son rôle est de permettre aux entreprises de lever des fonds et aux particuliers de faire fructifier leur épargne en achetant des actions ou des obligations."
  },
  {
    id: "2",
    title: "2. Comment gagner de l'argent ?",
    content: "Il y a deux moyens. 1) Les Dividendes : l'entreprise reverse une partie de ses bénéfices annuels aux actionnaires. 2) La Plus-value : vous achetez une action à 5 000 FCFA et la revendez à 7 000 FCFA (gain de 2 000 FCFA). À la BRVM, la stratégie privilégiée est celle des dividendes, car les rendements sont très attractifs (8 à 10% en moyenne)."
  },
  {
    id: "3",
    title: "3. Le rôle de la SGI",
    content: "Vous ne pouvez pas aller à la BRVM acheter des actions vous-même. Il est obligatoire de passer par un intermédiaire financier agréé appelé SGI (Société de Gestion et d'Intermédiation). C'est chez eux que vous ouvrez votre 'Compte-Titres', déposez votre argent et passez vos ordres depuis votre téléphone ou ordinateur."
  },
  {
    id: "4",
    title: "4. Le secret de la richesse : Le DCA",
    content: "N'essayez pas de 'prédire' le marché. La meilleure stratégie s'appelle le DCA (Dollar Cost Averaging) : investissez une somme fixe (ex: 50 000 FCFA) tous les mois, à la même date, que le marché monte ou descende. Surtout, réinvestissez immédiatement chaque dividende reçu pour déclencher la puissance des intérêts composés."
  }
];

// DONNÉES POUR LA PAGE : "CHOISIR SA SGI" (/sgi)
export const sgis = [
  {
    id: "1",
    name: "Finance Gestion et Intermédiation (FGI)",
    country: "Sénégal / Toute l'UEMOA (Plateforme en ligne)",
    fees: "1% sur les actions",
    min_deposit: "Pas de minimum exigé",
    highlight: "Idéal pour la diaspora. Frais d'ouverture de compte gratuits. Plateforme web performante."
  },
  {
    id: "2",
    name: "BOA Capital Securities",
    country: "Côte d'Ivoire (Présence régionale)",
    fees: "1% à 1.5%",
    min_deposit: "Varie (souvent à partir de 100 000 FCFA)",
    highlight: "SGI adossée à une grande banque. Sécurisant, mais processus d'ouverture parfois plus long."
  },
  {
    id: "3",
    name: "Hudson & Cie",
    country: "Côte d'Ivoire",
    fees: "1% sur les actions",
    min_deposit: "Environ 100 000 FCFA",
    highlight: "La plus ancienne SGI de la zone. Excellentes recommandations et notes d'analyse."
  },
  {
    id: "4",
    name: "CGF Bourse",
    country: "Sénégal",
    fees: "1.1% à 1.5%",
    min_deposit: "Flexible",
    highlight: "Très bonne plateforme en ligne (CGF Bourse Online), très populaire au Sénégal."
  }
];

// DONNÉES POUR LA PAGE : "ACTIONS PHARES" (/actions)
export const topActions = [
  {
    id: "1",
    ticker: "SNTS",
    name: "Sonatel",
    sector: "Télécommunications",
    yield: "~ 8% à 11% Net",
    price_range: "16 000 - 19 000 FCFA",
    description: "Le mastodonte de la BRVM. Rentable, monopoly presque total au Sénégal, verse des dividendes massifs et réguliers. La base de tout portefeuille de 'bon père de famille'."
  },
  {
    id: "2",
    ticker: "SICC",
    name: "Société Générale CI",
    sector: "Banques",
    yield: "~ 7% à 9% Net",
    price_range: "17 000 - 21 000 FCFA",
    description: "La première banque de Côte d'Ivoire. Très robuste, elle affiche d'excellents résultats nets année après année. Une valeur très solide."
  },
  {
    id: "3",
    ticker: "NTLC",
    name: "Nestlé Côte d'Ivoire",
    sector: "Industrie / Consommation",
    yield: "~ 5% à 7% Net",
    price_range: "6 000 - 8 000 FCFA",
    description: "Secteur de la consommation courante (Nescafé, Maggi). L'entreprise a redressé ses finances et offre une belle croissance de ses bénéfices."
  },
  {
    id: "4",
    ticker: "ORGT",
    name: "Orange Côte d'Ivoire",
    sector: "Télécommunications",
    yield: "~ 6% à 8% Net",
    price_range: "10 000 - 12 000 FCFA",
    description: "Introduction récente à la BRVM. C'est le leader du marché ivoirien. Fort potentiel sur le Mobile Money (Orange Money) et la Data."
  }
];