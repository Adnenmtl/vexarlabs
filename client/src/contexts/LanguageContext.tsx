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
  },
};
