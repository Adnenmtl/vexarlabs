/*
  Language Context for VexarLabs - Multilingual Support (EN/FR)
*/

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to English
    const saved = localStorage.getItem('vexarlabs-language');
    return (saved === 'fr' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('vexarlabs-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Québec-based Tech Studio',
    'hero.title': 'Building',
    'hero.title.highlight': 'Practical',
    'hero.title.end': 'Digital Solutions',
    'hero.description': 'We focus on mobility, media platforms, and creator economy tools that solve real-world challenges.',
    'hero.cta.products': 'View Our Products',
    'hero.cta.contact': 'Contact Us',
    
    // About
    'about.title': 'About',
    'about.title.highlight': 'VexarLabs',
    'about.p1': 'VexarLabs is a Québec-based technology studio developing focused digital solutions designed to solve concrete operational and media-related challenges.',
    'about.p2': 'We build scalable applications with lean architecture and automation-first thinking.',
    'about.p3': 'Our objective is simple: build products that are practical, reliable, and growth-ready.',
    
    // Products
    'products.title': 'Product',
    'products.title.highlight': 'Portfolio',
    'products.description': 'Three focused products solving real challenges in mobility, media, and creator economy.',
    'products.features': 'Key Features:',
    'products.cta.learn': 'Learn More',
    'products.cta.privacy': 'Privacy Policy',
    
    // Product: Ronde Sécurité Taxi
    'product.ronde.name': 'Ronde Sécurité Taxi',
    'product.ronde.category': 'Mobility & Safety',
    'product.ronde.market': 'Québec Taxi Industry',
    'product.ronde.description': 'A mobile application designed to streamline and automate security rounds for taxi drivers in Québec. Simplifies compliance reporting and operational tracking.',
    'product.ronde.feature1': 'Automated security round tracking',
    'product.ronde.feature2': 'Real-time GPS location logging',
    'product.ronde.feature3': 'Compliance report generation',
    'product.ronde.feature4': 'Driver-friendly interface',
    'product.ronde.status': 'Active Development',
    
    // Product: FMarabia
    'product.fmarabia.name': 'FMarabia',
    'product.fmarabia.category': 'Media Platform',
    'product.fmarabia.market': 'Arabic Content',
    'product.fmarabia.description': 'A media distribution platform focused on Arabic-language content. Designed for content creators and audiences seeking accessible Arabic media.',
    'product.fmarabia.feature1': 'Arabic content management system',
    'product.fmarabia.feature2': 'Multi-format media support',
    'product.fmarabia.feature3': 'Creator monetization tools',
    'product.fmarabia.feature4': 'Audience analytics dashboard',
    'product.fmarabia.status': 'Beta Testing',
    
    // Product: Influvo
    'product.influvo.name': 'Influvo',
    'product.influvo.category': 'Creator Economy',
    'product.influvo.market': 'Digital Creators',
    'product.influvo.description': 'A toolkit for digital creators to manage collaborations, track performance, and monetize their influence. Built for efficiency and growth.',
    'product.influvo.feature1': 'Collaboration management system',
    'product.influvo.feature2': 'Performance analytics',
    'product.influvo.feature3': 'Revenue tracking tools',
    'product.influvo.feature4': 'Brand partnership platform',
    'product.influvo.status': 'Planning Phase',
    
    // Development Approach
    'approach.title': 'Development',
    'approach.title.highlight': 'Approach',
    'approach.description': 'At VexarLabs, we follow a structured development methodology that prioritizes functionality and market relevance.',
    'approach.item1.title': 'Problem-first product design',
    'approach.item1.desc': 'Starting with real-world challenges to build meaningful solutions',
    'approach.item2.title': 'Lean and modular architecture',
    'approach.item2.desc': 'Building flexible systems that adapt to changing requirements',
    'approach.item3.title': 'Scalable infrastructure',
    'approach.item3.desc': 'Designing for growth from day one',
    'approach.item4.title': 'Automation-driven workflows',
    'approach.item4.desc': 'Reducing manual work through intelligent automation',
    'approach.item5.title': 'Long-term maintainability',
    'approach.item5.desc': 'Building systems that stand the test of time',
    
    // Strategic Positioning
    'positioning.title': 'Strategic Positioning',
    'positioning.p1': 'Based in Québec, VexarLabs develops solutions tailored to local operational realities while building platforms capable of global scalability.',
    'positioning.p2': 'We operate at the intersection of:',
    'positioning.item1': 'Mobility infrastructure',
    'positioning.item2': 'Media distribution',
    'positioning.item3': 'Creator economy systems',
    'positioning.item4': 'Applied AI technologies',
    
    // Technology Stack
    'tech.title': 'Technology',
    'tech.title.highlight': 'Stack',
    'tech.item1': 'Cross-platform mobile development',
    'tech.item2': 'Cloud-based backend infrastructure',
    'tech.item3': 'Modular system architecture',
    'tech.item4': 'Automation pipelines',
    
    // Collaboration
    'contact.title': "Let's Collaborate",
    'contact.description': 'VexarLabs is open to collaboration with developers, designers, transport industry professionals, digital creators, and strategic partners.',
    'contact.cta': 'Contact us to explore partnership opportunities.',
    
    // Footer
    'footer.tagline': 'Building practical digital solutions.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    
    // Construction Page
    'construction.title': 'Site Under Construction',
    'construction.description': "We're working on something amazing. Enter the password to preview.",
    'construction.password': 'Password',
    'construction.placeholder': 'Enter password',
    'construction.button': 'Unlock Site',
    'construction.error': 'Incorrect password. Please try again.',
    'construction.footer': 'Building practical digital solutions.',
    
    // Ronde Sécurité Taxi Page
    'ronde.back': 'Back to Products',
    'ronde.category': 'Mobility & Safety Tech',
    'ronde.market': 'Québec (B2B – Taxi industry)',
    'ronde.title': 'Ronde Sécurité Taxi Québec',
    'ronde.description': 'Digital security patrol management application designed for taxi drivers and fleet operators. Streamline your mandatory daily inspections with our comprehensive checklist.',
    'ronde.status': 'Advanced Development / Deployment Phase',
    'ronde.download.appstore': 'Download on',
    'ronde.download.appstore.name': 'App Store',
    'ronde.download.playstore': 'Get it on',
    'ronde.download.playstore.name': 'Google Play',
    'ronde.screenshots.title': 'App Screenshots',
    'ronde.demo.title': 'Demo Video',
    'ronde.demo.caption': 'Discover how to use the app in less than 2 minutes',
    'ronde.features.title': 'Key Features',
    'ronde.feature1.title': 'Complete Checklist',
    'ronde.feature1.desc': '19 standard checkpoints + 6 additional points for Adapted Taxi. Compliant with SAAQ requirements.',
    'ronde.feature2.title': 'Patrol History',
    'ronde.feature2.desc': 'View all past inspections with date, time, and detailed results. Complete traceability guaranteed.',
    'ronde.feature3.title': 'Email Reports',
    'ronde.feature3.desc': 'Automatic sending of professional PDF reports including all driver, vehicle, and inspection information.',
    'ronde.feature4.title': 'Settings Management',
    'ronde.feature4.desc': 'Save your personal information and vehicle details for automatic filling during future patrols.',
    'ronde.feature5.title': 'Offline Mode',
    'ronde.feature5.desc': 'All data is stored locally. No internet connection required to perform patrols.',
    'ronde.feature6.title': 'Intuitive Interface',
    'ronde.feature6.desc': 'Simple and ergonomic design. Complete your daily inspections in just a few minutes.',
    'ronde.checkpoints.title': 'Inspection Checkpoints',
    'ronde.checkpoints.standard': '19 Standard Points',
    'ronde.checkpoints.adapted': '6 Adapted Taxi Points',
    'ronde.checkpoint1': "Valid driver's license",
    'ronde.checkpoint2': 'Taxi driver authorization',
    'ronde.checkpoint3': 'Registration certificate',
    'ronde.checkpoint4': 'Valid insurance',
    'ronde.checkpoint5': 'Tires - Pressure',
    'ronde.checkpoint6': 'Tires - Wear/Damage',
    'ronde.checkpoint7': 'Headlights',
    'ronde.checkpoint8': 'Tail and brake lights',
    'ronde.checkpoint9': 'Turn signals and hazard lights',
    'ronde.checkpoint10': 'Windshield',
    'ronde.checkpoint11': 'Wipers',
    'ronde.checkpoint12': 'Mirrors',
    'ronde.checkpoint13': 'Doors and body',
    'ronde.checkpoint14': 'Seat belts',
    'ronde.checkpoint15': 'Horn',
    'ronde.checkpoint16': 'Dashboard warning lights',
    'ronde.checkpoint17': 'Brakes',
    'ronde.checkpoint18': 'Steering',
    'ronde.checkpoint19': 'Engine oil level',
    'ronde.adapted1': 'Access ramp',
    'ronde.adapted2': 'Securing system',
    'ronde.adapted3': 'Adapted seat belts',
    'ronde.adapted4': 'Clear interior space',
    'ronde.adapted5': 'Adapted Taxi signage',
    'ronde.adapted6': 'Assistance equipment',
    'ronde.faq.title': 'Frequently Asked Questions',
    'ronde.faq1.q': 'Is the app free?',
    'ronde.faq1.a': 'Yes, Ronde Sécurité Taxi is completely free to download and use. No hidden fees or subscriptions.',
    'ronde.faq2.q': 'Is it compliant with SAAQ regulations?',
    'ronde.faq2.a': 'Absolutely. The app includes all mandatory checkpoints required by the SAAQ for taxi security patrols in Québec.',
    'ronde.faq3.q': 'Do I need internet to use the app?',
    'ronde.faq3.a': 'No. All data is stored locally on your device. You can perform patrols completely offline. Internet is only needed to send email reports.',
    'ronde.faq4.q': 'Can I use it for multiple vehicles?',
    'ronde.faq4.a': 'Yes. You can save information for multiple vehicles and switch between them easily in the settings.',
    'ronde.faq5.q': 'How long are patrol records kept?',
    'ronde.faq5.a': 'All patrol records are stored indefinitely on your device. You can export or delete them at any time.',
    'ronde.faq6.q': 'Is there support for Adapted Taxi?',
    'ronde.faq6.a': 'Yes. The app includes 6 additional checkpoints specifically for Adapted Taxi vehicles, in addition to the 19 standard points.',
    'ronde.faq7.q': 'Can I get technical support?',
    'ronde.faq7.a': 'Of course. Contact us at contact@vexarlabs.com for any questions or technical issues.',
    'ronde.contact.title': 'Need Help?',
    'ronde.contact.description': "Questions about the app? Need technical support? We're here to help.",
    'ronde.contact.cta': 'Contact Support',
    'ronde.contact.privacy': 'Privacy Policy',
    
    // Privacy Policy Page
    'privacy.title': 'Privacy Policy',
    'privacy.company': 'VexarLabs',
    'privacy.lastUpdated': 'Last updated:',
    'privacy.section1.title': '1. Introduction',
    'privacy.section1.content': 'VexarLabs ("we", "our", "us") is committed to protecting the privacy of your personal information. This privacy policy explains how we collect, use and protect your data when you use our services and applications.',
    'privacy.section2.title': '2. Information Collected',
    'privacy.section2.intro': 'We may collect the following types of information:',
    'privacy.section2.item1': 'Identification information (name, email address)',
    'privacy.section2.item2': 'Application usage data',
    'privacy.section2.item3': 'Technical information (device type, operating system)',
    'privacy.section2.item4': 'Location data (if authorized by the user)',
    'privacy.section3.title': '3. Data Usage',
    'privacy.section3.intro': 'We use your information to:',
    'privacy.section3.item1': 'Provide and improve our services',
    'privacy.section3.item2': 'Personalize your user experience',
    'privacy.section3.item3': 'Communicate with you regarding our services',
    'privacy.section3.item4': 'Ensure the security of our applications',
    'privacy.section4.title': '4. Data Sharing',
    'privacy.section4.content': 'We do not sell your personal data. We may share your information with third-party service providers who help us operate our applications, subject to strict confidentiality obligations.',
    'privacy.section5.title': '5. Data Security',
    'privacy.section5.content': 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure or destruction.',
    'privacy.section6.title': '6. Your Rights',
    'privacy.section6.intro': 'In accordance with GDPR and applicable laws, you have the following rights:',
    'privacy.section6.item1': 'Right to access your personal data',
    'privacy.section6.item2': 'Right to rectification of inaccurate data',
    'privacy.section6.item3': 'Right to erasure of your data',
    'privacy.section6.item4': 'Right to data portability',
    'privacy.section6.item5': 'Right to object to processing',
    'privacy.section7.title': '7. Contact',
    'privacy.section7.content': 'For any questions regarding this privacy policy or to exercise your rights, please contact us at:',
    
    // Terms of Service Page
    'terms.title': 'Terms of Service',
    'terms.company': 'VexarLabs',
    'terms.lastUpdated': 'Last updated:',
    'terms.section1.title': '1. Acceptance of Terms',
    'terms.section1.content': 'By accessing and using VexarLabs applications and services, you agree to be bound by these terms of service. If you do not accept these terms, please do not use our services.',
    'terms.section2.title': '2. Description of Services',
    'terms.section2.content': 'VexarLabs provides mobile and web applications designed to meet various needs. Each application may have specific features and conditions that apply in addition to these general terms.',
    'terms.section3.title': '3. User Account',
    'terms.section3.content': 'Some of our applications may require account creation. You are responsible for maintaining the confidentiality of your login credentials and all activities performed under your account.',
    'terms.section4.title': '4. Acceptable Use',
    'terms.section4.intro': 'You agree not to:',
    'terms.section4.item1': 'Use our services for illegal purposes',
    'terms.section4.item2': 'Attempt to compromise the security of our systems',
    'terms.section4.item3': 'Copy, modify or distribute our content without authorization',
    'terms.section4.item4': 'Interfere with the normal operation of our services',
    'terms.section5.title': '5. Intellectual Property',
    'terms.section5.content': 'All content, trademarks, logos and visual elements present in our applications are the exclusive property of VexarLabs or its partners. Any unauthorized reproduction is prohibited.',
    'terms.section6.title': '6. Limitation of Liability',
    'terms.section6.content': 'Our services are provided "as is". VexarLabs does not guarantee that the services will be uninterrupted or error-free. To the extent permitted by law, we disclaim any liability for indirect damages.',
    'terms.section7.title': '7. Modifications',
    'terms.section7.content': 'We reserve the right to modify these terms at any time. Modifications will take effect upon publication. Your continued use of the services after modification constitutes your acceptance of the new terms.',
    'terms.section8.title': '8. Contact',
    'terms.section8.content': 'For any questions regarding these terms, contact us at:',
    
    // 404 Page
    'notFound.title': 'Page Not Found',
    'notFound.description': 'Sorry, the page you are looking for doesn\'t exist. It may have been moved or deleted.',
    'notFound.cta.home': 'Go Home',
    'notFound.cta.back': 'Go Back',
    'notFound.quickLinks': 'Quick Links',
  },
  fr: {
    // Header
    'nav.products': 'Produits',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Studio Technologique Québécois',
    'hero.title': 'Créer des solutions',
    'hero.title.highlight': 'pratiques',
    'hero.title.end': 'et numériques',
    'hero.description': 'Nous nous concentrons sur la mobilité, les plateformes médias et les outils pour l\'économie des créateurs qui résolvent des défis concrets.',
    'hero.cta.products': 'Voir nos produits',
    'hero.cta.contact': 'Nous contacter',
    
    // About
    'about.title': 'À propos de',
    'about.title.highlight': 'VexarLabs',
    'about.p1': 'VexarLabs est un studio technologique québécois développant des solutions numériques ciblées conçues pour résoudre des défis opérationnels et médiatiques concrets.',
    'about.p2': 'Nous construisons des applications évolutives avec une architecture légère et une approche axée sur l\'automatisation.',
    'about.p3': 'Notre objectif est simple : créer des produits pratiques, fiables et prêts pour la croissance.',
    
    // Products
    'products.title': 'Portfolio de',
    'products.title.highlight': 'produits',
    'products.description': 'Trois produits ciblés résolvant des défis réels dans la mobilité, les médias et l\'économie des créateurs.',
    'products.features': 'Fonctionnalités clés :',
    'products.cta.learn': 'En savoir plus',
    'products.cta.privacy': 'Politique de confidentialité',
    
    // Product: Ronde Sécurité Taxi
    'product.ronde.name': 'Ronde Sécurité Taxi',
    'product.ronde.category': 'Mobilité et sécurité',
    'product.ronde.market': 'Industrie du taxi au Québec',
    'product.ronde.description': 'Une application mobile conçue pour simplifier et automatiser les rondes de sécurité des chauffeurs de taxi au Québec. Simplifie les rapports de conformité et le suivi opérationnel.',
    'product.ronde.feature1': 'Suivi automatisé des rondes de sécurité',
    'product.ronde.feature2': 'Enregistrement GPS en temps réel',
    'product.ronde.feature3': 'Génération de rapports de conformité',
    'product.ronde.feature4': 'Interface conviviale pour les chauffeurs',
    'product.ronde.status': 'En développement actif',
    
    // Product: FMarabia
    'product.fmarabia.name': 'FMarabia',
    'product.fmarabia.category': 'Plateforme média',
    'product.fmarabia.market': 'Contenu arabe',
    'product.fmarabia.description': 'Une plateforme de distribution média axée sur le contenu en langue arabe. Conçue pour les créateurs de contenu et les audiences recherchant des médias arabes accessibles.',
    'product.fmarabia.feature1': 'Système de gestion de contenu arabe',
    'product.fmarabia.feature2': 'Support multi-formats',
    'product.fmarabia.feature3': 'Outils de monétisation pour créateurs',
    'product.fmarabia.feature4': 'Tableau de bord analytique',
    'product.fmarabia.status': 'Tests bêta',
    
    // Product: Influvo
    'product.influvo.name': 'Influvo',
    'product.influvo.category': 'Économie des créateurs',
    'product.influvo.market': 'Créateurs numériques',
    'product.influvo.description': 'Une boîte à outils pour les créateurs numériques afin de gérer les collaborations, suivre les performances et monétiser leur influence. Conçu pour l\'efficacité et la croissance.',
    'product.influvo.feature1': 'Système de gestion de collaborations',
    'product.influvo.feature2': 'Analytiques de performance',
    'product.influvo.feature3': 'Outils de suivi des revenus',
    'product.influvo.feature4': 'Plateforme de partenariats de marque',
    'product.influvo.status': 'Phase de planification',
    
    // Development Approach
    'approach.title': 'Approche de',
    'approach.title.highlight': 'développement',
    'approach.description': 'Chez VexarLabs, nous suivons une méthodologie de développement structurée qui priorise la fonctionnalité et la pertinence du marché.',
    'approach.item1.title': 'Conception centrée sur le problème',
    'approach.item1.desc': 'Partir des défis concrets pour créer des solutions significatives',
    'approach.item2.title': 'Architecture légère et modulaire',
    'approach.item2.desc': 'Construire des systèmes flexibles qui s\'adaptent aux exigences changeantes',
    'approach.item3.title': 'Infrastructure évolutive',
    'approach.item3.desc': 'Concevoir pour la croissance dès le premier jour',
    'approach.item4.title': 'Flux de travail automatisés',
    'approach.item4.desc': 'Réduire le travail manuel grâce à l\'automatisation intelligente',
    'approach.item5.title': 'Maintenabilité à long terme',
    'approach.item5.desc': 'Construire des systèmes qui résistent à l\'épreuve du temps',
    
    // Strategic Positioning
    'positioning.title': 'Positionnement stratégique',
    'positioning.p1': 'Basé au Québec, VexarLabs développe des solutions adaptées aux réalités opérationnelles locales tout en construisant des plateformes capables d\'une évolutivité mondiale.',
    'positioning.p2': 'Nous opérons à l\'intersection de :',
    'positioning.item1': 'Infrastructure de mobilité',
    'positioning.item2': 'Distribution média',
    'positioning.item3': 'Systèmes d\'économie des créateurs',
    'positioning.item4': 'Technologies d\'IA appliquée',
    
    // Technology Stack
    'tech.title': 'Pile',
    'tech.title.highlight': 'technologique',
    'tech.item1': 'Développement mobile multiplateforme',
    'tech.item2': 'Infrastructure backend cloud',
    'tech.item3': 'Architecture système modulaire',
    'tech.item4': 'Pipelines d\'automatisation',
    
    // Collaboration
    'contact.title': 'Collaborons ensemble',
    'contact.description': 'VexarLabs est ouvert à la collaboration avec les développeurs, designers, professionnels de l\'industrie du transport, créateurs numériques et partenaires stratégiques.',
    'contact.cta': 'Contactez-nous pour explorer les opportunités de partenariat.',
    
    // Footer
    'footer.tagline': 'Créer des solutions numériques pratiques.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
    
    // Construction Page
    'construction.title': 'Site en construction',
    'construction.description': 'Nous travaillons sur quelque chose d\'incroyable. Entrez le mot de passe pour prévisualiser.',
    'construction.password': 'Mot de passe',
    'construction.placeholder': 'Entrer le mot de passe',
    'construction.button': 'Déverrouiller le site',
    'construction.error': 'Mot de passe incorrect. Veuillez réessayer.',
    'construction.footer': 'Créer des solutions numériques pratiques.',
    
    // Ronde Sécurité Taxi Page
    'ronde.back': 'Retour aux produits',
    'ronde.category': 'Mobilité et sécurité',
    'ronde.market': 'Québec (B2B – Industrie du taxi)',
    'ronde.title': 'Ronde Sécurité Taxi Québec',
    'ronde.description': 'Application de gestion numérique des rondes de sécurité conçue pour les chauffeurs de taxi et les exploitants de flottes. Simplifiez vos inspections quotidiennes obligatoires avec notre liste de vérification complète.',
    'ronde.status': 'Développement avancé / Phase de déploiement',
    'ronde.download.appstore': 'Télécharger sur',
    'ronde.download.appstore.name': 'App Store',
    'ronde.download.playstore': 'Disponible sur',
    'ronde.download.playstore.name': 'Google Play',
    'ronde.screenshots.title': 'Captures d\'écran de l\'app',
    'ronde.demo.title': 'Vidéo de démonstration',
    'ronde.demo.caption': 'Découvrez comment utiliser l\'app en moins de 2 minutes',
    'ronde.features.title': 'Fonctionnalités clés',
    'ronde.feature1.title': 'Liste de vérification complète',
    'ronde.feature1.desc': '19 points standards + 6 points supplémentaires pour Taxi adapté. Conforme aux exigences de la SAAQ.',
    'ronde.feature2.title': 'Historique des rondes',
    'ronde.feature2.desc': 'Consultez toutes les inspections passées avec date, heure et résultats détaillés. Traçabilité complète garantie.',
    'ronde.feature3.title': 'Rapports par courriel',
    'ronde.feature3.desc': 'Envoi automatique de rapports PDF professionnels incluant toutes les informations du chauffeur, du véhicule et de l\'inspection.',
    'ronde.feature4.title': 'Gestion des paramètres',
    'ronde.feature4.desc': 'Sauvegardez vos informations personnelles et les détails du véhicule pour un remplissage automatique lors des rondes futures.',
    'ronde.feature5.title': 'Mode hors ligne',
    'ronde.feature5.desc': 'Toutes les données sont stockées localement. Aucune connexion Internet requise pour effectuer les rondes.',
    'ronde.feature6.title': 'Interface intuitive',
    'ronde.feature6.desc': 'Design simple et ergonomique. Complétez vos inspections quotidiennes en quelques minutes seulement.',
    'ronde.checkpoints.title': 'Points d\'inspection',
    'ronde.checkpoints.standard': '19 points standards',
    'ronde.checkpoints.adapted': '6 points Taxi adapté',
    'ronde.checkpoint1': 'Permis de conduire valide',
    'ronde.checkpoint2': 'Autorisation de chauffeur de taxi',
    'ronde.checkpoint3': 'Certificat d\'immatriculation',
    'ronde.checkpoint4': 'Assurance valide',
    'ronde.checkpoint5': 'Pneus - Pression',
    'ronde.checkpoint6': 'Pneus - Usure/Dommages',
    'ronde.checkpoint7': 'Phares avant',
    'ronde.checkpoint8': 'Feux arrière et de freinage',
    'ronde.checkpoint9': 'Clignotants et feux de détresse',
    'ronde.checkpoint10': 'Pare-brise',
    'ronde.checkpoint11': 'Essuie-glaces',
    'ronde.checkpoint12': 'Rétroviseurs',
    'ronde.checkpoint13': 'Portes et carrosserie',
    'ronde.checkpoint14': 'Ceintures de sécurité',
    'ronde.checkpoint15': 'Klaxon',
    'ronde.checkpoint16': 'Témoins lumineux du tableau de bord',
    'ronde.checkpoint17': 'Freins',
    'ronde.checkpoint18': 'Direction',
    'ronde.checkpoint19': 'Niveau d\'huile moteur',
    'ronde.adapted1': 'Rampe d\'accès',
    'ronde.adapted2': 'Système d\'arrimage',
    'ronde.adapted3': 'Ceintures de sécurité adaptées',
    'ronde.adapted4': 'Espace intérieur dégagé',
    'ronde.adapted5': 'Signalisation Taxi adapté',
    'ronde.adapted6': 'Équipement d\'assistance',
    'ronde.faq.title': 'Questions fréquemment posées',
    'ronde.faq1.q': 'L\'application est-elle gratuite ?',
    'ronde.faq1.a': 'Oui, Ronde Sécurité Taxi est complètement gratuite à télécharger et à utiliser. Aucun frais caché ni abonnement.',
    'ronde.faq2.q': 'Est-elle conforme aux règlements de la SAAQ ?',
    'ronde.faq2.a': 'Absolument. L\'application inclut tous les points de vérification obligatoires requis par la SAAQ pour les rondes de sécurité des taxis au Québec.',
    'ronde.faq3.q': 'Ai-je besoin d\'Internet pour utiliser l\'app ?',
    'ronde.faq3.a': 'Non. Toutes les données sont stockées localement sur votre appareil. Vous pouvez effectuer des rondes complètement hors ligne. Internet n\'est nécessaire que pour envoyer les rapports par courriel.',
    'ronde.faq4.q': 'Puis-je l\'utiliser pour plusieurs véhicules ?',
    'ronde.faq4.a': 'Oui. Vous pouvez sauvegarder les informations de plusieurs véhicules et basculer entre eux facilement dans les paramètres.',
    'ronde.faq5.q': 'Combien de temps les enregistrements de rondes sont-ils conservés ?',
    'ronde.faq5.a': 'Tous les enregistrements de rondes sont stockés indéfiniment sur votre appareil. Vous pouvez les exporter ou les supprimer à tout moment.',
    'ronde.faq6.q': 'Y a-t-il un support pour Taxi adapté ?',
    'ronde.faq6.a': 'Oui. L\'application inclut 6 points de vérification supplémentaires spécifiquement pour les véhicules Taxi adapté, en plus des 19 points standards.',
    'ronde.faq7.q': 'Puis-je obtenir un support technique ?',
    'ronde.faq7.a': 'Bien sûr. Contactez-nous à contact@vexarlabs.com pour toute question ou problème technique.',
    'ronde.contact.title': 'Besoin d\'aide ?',
    'ronde.contact.description': 'Des questions sur l\'app ? Besoin de support technique ? Nous sommes là pour vous aider.',
    'ronde.contact.cta': 'Contacter le support',
    'ronde.contact.privacy': 'Politique de confidentialité',
    
    // Privacy Policy Page
    'privacy.title': 'Politique de Confidentialité',
    'privacy.company': 'VexarLabs',
    'privacy.lastUpdated': 'Dernière mise à jour :',
    'privacy.section1.title': '1. Introduction',
    'privacy.section1.content': 'VexarLabs ("nous", "notre", "nos") s\'engage à protéger la confidentialité de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données lorsque vous utilisez nos services et applications.',
    'privacy.section2.title': '2. Informations collectées',
    'privacy.section2.intro': 'Nous pouvons collecter les types d\'informations suivants :',
    'privacy.section2.item1': 'Informations d\'identification (nom, adresse email)',
    'privacy.section2.item2': 'Données d\'utilisation des applications',
    'privacy.section2.item3': 'Informations techniques (type d\'appareil, système d\'exploitation)',
    'privacy.section2.item4': 'Données de localisation (si autorisé par l\'utilisateur)',
    'privacy.section3.title': '3. Utilisation des données',
    'privacy.section3.intro': 'Nous utilisons vos informations pour :',
    'privacy.section3.item1': 'Fournir et améliorer nos services',
    'privacy.section3.item2': 'Personnaliser votre expérience utilisateur',
    'privacy.section3.item3': 'Communiquer avec vous concernant nos services',
    'privacy.section3.item4': 'Assurer la sécurité de nos applications',
    'privacy.section4.title': '4. Partage des données',
    'privacy.section4.content': 'Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident à exploiter nos applications, sous réserve d\'obligations de confidentialité strictes.',
    'privacy.section5.title': '5. Sécurité des données',
    'privacy.section5.content': 'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.',
    'privacy.section6.title': '6. Vos droits',
    'privacy.section6.intro': 'Conformément au RGPD et aux lois applicables, vous disposez des droits suivants :',
    'privacy.section6.item1': 'Droit d\'accès à vos données personnelles',
    'privacy.section6.item2': 'Droit de rectification des données inexactes',
    'privacy.section6.item3': 'Droit à l\'effacement de vos données',
    'privacy.section6.item4': 'Droit à la portabilité des données',
    'privacy.section6.item5': 'Droit d\'opposition au traitement',
    'privacy.section7.title': '7. Contact',
    'privacy.section7.content': 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter à :',
    
    // Terms of Service Page
    'terms.title': 'Conditions d\'Utilisation',
    'terms.company': 'VexarLabs',
    'terms.lastUpdated': 'Dernière mise à jour :',
    'terms.section1.title': '1. Acceptation des conditions',
    'terms.section1.content': 'En accédant et en utilisant les applications et services de VexarLabs, vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.',
    'terms.section2.title': '2. Description des services',
    'terms.section2.content': 'VexarLabs fournit des applications mobiles et web conçues pour répondre à divers besoins. Chaque application peut avoir des fonctionnalités et des conditions spécifiques qui s\'appliquent en plus de ces conditions générales.',
    'terms.section3.title': '3. Compte utilisateur',
    'terms.section3.content': 'Certaines de nos applications peuvent nécessiter la création d\'un compte. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités effectuées sous votre compte.',
    'terms.section4.title': '4. Utilisation acceptable',
    'terms.section4.intro': 'Vous vous engagez à ne pas :',
    'terms.section4.item1': 'Utiliser nos services à des fins illégales',
    'terms.section4.item2': 'Tenter de compromettre la sécurité de nos systèmes',
    'terms.section4.item3': 'Copier, modifier ou distribuer notre contenu sans autorisation',
    'terms.section4.item4': 'Interférer avec le fonctionnement normal de nos services',
    'terms.section5.title': '5. Propriété intellectuelle',
    'terms.section5.content': 'Tous les contenus, marques, logos et éléments visuels présents dans nos applications sont la propriété exclusive de VexarLabs ou de ses partenaires. Toute reproduction non autorisée est interdite.',
    'terms.section6.title': '6. Limitation de responsabilité',
    'terms.section6.content': 'Nos services sont fournis "en l\'état". VexarLabs ne garantit pas que les services seront ininterrompus ou exempts d\'erreurs. Dans la mesure permise par la loi, nous déclinons toute responsabilité pour les dommages indirects.',
    'terms.section7.title': '7. Modifications',
    'terms.section7.content': 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication. Votre utilisation continue des services après modification constitue votre acceptation des nouvelles conditions.',
    'terms.section8.title': '8. Contact',
    'terms.section8.content': 'Pour toute question concernant ces conditions, contactez-nous à :',
    
    // 404 Page
    'notFound.title': 'Page introuvable',
    'notFound.description': 'Désolé, la page que vous recherchez n\'existe pas. Elle a peut-être été déplacée ou supprimée.',
    'notFound.cta.home': 'Retour à l\'accueil',
    'notFound.cta.back': 'Retour',
    'notFound.quickLinks': 'Liens rapides',
  },
};
