/*
  SEO Head Component - Multilingual Meta Tags & Hreflang
*/

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';

interface SEOHeadProps {
  page?: 'home' | 'ronde' | 'fmarabia' | 'influvo' | 'privacy' | 'terms';
}

export default function SEOHead({ page = 'home' }: SEOHeadProps) {
  const { language } = useLanguage();
  const [location] = useLocation();

  const baseUrl = 'https://vexarlabs.com'; // Update with actual domain
  const currentUrl = `${baseUrl}${location}`;

  // SEO content by page and language
  const seoContent: Record<string, Record<'en' | 'fr', { title: string; description: string; keywords: string }>> = {
    home: {
      en: {
        title: 'VexarLabs - Building Practical Digital Solutions | Québec Tech Studio',
        description: 'Québec-based technology studio developing focused digital solutions for mobility, media platforms, and creator economy. Discover Ronde Sécurité Taxi, FMarabia, and Influvo.',
        keywords: 'VexarLabs, Quebec tech studio, mobility solutions, media platform, creator economy, Ronde Sécurité Taxi, FMarabia, Influvo, digital solutions',
      },
      fr: {
        title: 'VexarLabs - Créer des solutions numériques pratiques | Studio technologique québécois',
        description: 'Studio technologique québécois développant des solutions numériques ciblées pour la mobilité, les plateformes médias et l\'économie des créateurs. Découvrez Ronde Sécurité Taxi, FMarabia et Influvo.',
        keywords: 'VexarLabs, studio technologique Québec, solutions mobilité, plateforme média, économie créateurs, Ronde Sécurité Taxi, FMarabia, Influvo, solutions numériques',
      },
    },
    ronde: {
      en: {
        title: 'Ronde Sécurité Taxi - Digital Security Patrol Management | VexarLabs',
        description: 'Mobile application for taxi drivers in Québec to streamline security rounds, compliance reporting, and operational tracking. iOS and Android available.',
        keywords: 'Ronde Sécurité Taxi, taxi security, Quebec taxi, mobile app, compliance reporting, security patrol, taxi management',
      },
      fr: {
        title: 'Ronde Sécurité Taxi - Gestion numérique des rondes de sécurité | VexarLabs',
        description: 'Application mobile pour les chauffeurs de taxi au Québec permettant de simplifier les rondes de sécurité, les rapports de conformité et le suivi opérationnel. Disponible sur iOS et Android.',
        keywords: 'Ronde Sécurité Taxi, sécurité taxi, taxi Québec, application mobile, rapports conformité, ronde sécurité, gestion taxi',
      },
    },
    fmarabia: {
      en: {
        title: 'FMarabia - Arabic Media Streaming Platform | VexarLabs',
        description: 'Mobile streaming platform focused on Arabic radio and audio content. Curated international stations with optimized mobile performance.',
        keywords: 'FMarabia, Arabic media, radio streaming, Arabic content, media platform, audio streaming, Arabic radio',
      },
      fr: {
        title: 'FMarabia - Plateforme de streaming média arabe | VexarLabs',
        description: 'Plateforme de streaming mobile axée sur le contenu radio et audio arabe. Stations internationales sélectionnées avec performance mobile optimisée.',
        keywords: 'FMarabia, média arabe, streaming radio, contenu arabe, plateforme média, streaming audio, radio arabe',
      },
    },
    influvo: {
      en: {
        title: 'Influvo - Creator Economy Toolkit | VexarLabs',
        description: 'Digital toolkit for creators to manage collaborations, track performance, and monetize influence. Built for efficiency and growth.',
        keywords: 'Influvo, creator economy, influencer tools, collaboration management, performance analytics, monetization, digital creators',
      },
      fr: {
        title: 'Influvo - Boîte à outils pour l\'économie des créateurs | VexarLabs',
        description: 'Boîte à outils numérique pour les créateurs afin de gérer les collaborations, suivre les performances et monétiser leur influence. Conçu pour l\'efficacité et la croissance.',
        keywords: 'Influvo, économie créateurs, outils influenceurs, gestion collaborations, analytiques performance, monétisation, créateurs numériques',
      },
    },
    privacy: {
      en: {
        title: 'Privacy Policy | VexarLabs',
        description: 'Privacy policy for VexarLabs and our products. Learn how we protect your data and respect your privacy.',
        keywords: 'privacy policy, data protection, VexarLabs privacy, user data, GDPR',
      },
      fr: {
        title: 'Politique de confidentialité | VexarLabs',
        description: 'Politique de confidentialité de VexarLabs et de nos produits. Découvrez comment nous protégeons vos données et respectons votre vie privée.',
        keywords: 'politique confidentialité, protection données, confidentialité VexarLabs, données utilisateur, RGPD',
      },
    },
    terms: {
      en: {
        title: 'Terms of Service | VexarLabs',
        description: 'Terms of service for VexarLabs products and services. Read our terms and conditions.',
        keywords: 'terms of service, terms and conditions, VexarLabs terms, legal',
      },
      fr: {
        title: 'Conditions d\'utilisation | VexarLabs',
        description: 'Conditions d\'utilisation des produits et services VexarLabs. Lisez nos termes et conditions.',
        keywords: 'conditions utilisation, termes et conditions, conditions VexarLabs, légal',
      },
    },
  };

  const currentSEO = seoContent[page]?.[language] || seoContent.home[language];

  useEffect(() => {
    // Update document title
    document.title = currentSEO.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentSEO.description);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', currentSEO.keywords);

    // Update html lang attribute
    document.documentElement.lang = language;

    // Update or create Open Graph tags
    const ogTags = [
      { property: 'og:title', content: currentSEO.title },
      { property: 'og:description', content: currentSEO.description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: language === 'en' ? 'en_US' : 'fr_CA' },
      { property: 'og:site_name', content: 'VexarLabs' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Update or create Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: currentSEO.title },
      { name: 'twitter:description', content: currentSEO.description },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add hreflang tags
    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

    // Add new hreflang tags
    const languages = ['en', 'fr'];
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', `${baseUrl}${location}?lang=${lang}`);
      document.head.appendChild(link);
    });

    // Add x-default hreflang
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', `${baseUrl}${location}`);
    document.head.appendChild(defaultLink);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [language, currentSEO, currentUrl, location]);

  return null; // This component doesn't render anything
}
