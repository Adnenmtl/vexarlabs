# Guide d'Utilisation du Template EmailJS VexarLabs

Ce guide vous explique comment utiliser le template HTML professionnel pour EmailJS.

## 📧 Template Créé

Le fichier `EMAILJS_TEMPLATE.html` contient un template email professionnel avec :
- ✅ Design responsive et moderne
- ✅ Branding VexarLabs (couleurs orange/cyan)
- ✅ Mise en page structurée et lisible
- ✅ Bouton de réponse rapide
- ✅ Compatible avec tous les clients email

## 🚀 Comment Utiliser le Template

### Étape 1 : Copier le Code HTML

1. Ouvrez le fichier `EMAILJS_TEMPLATE.html`
2. Copiez **tout le contenu** du fichier (Ctrl+A puis Ctrl+C)

### Étape 2 : Créer le Template dans EmailJS

1. Connectez-vous à [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Allez dans **Email Templates**
3. Cliquez sur **Create New Template**
4. Donnez un nom au template : `VexarLabs Contact Form`

### Étape 3 : Configurer le Template

#### A. Onglet "Settings"
- **Template Name**: `VexarLabs Contact Form`
- **Template ID**: Copiez cet ID (vous en aurez besoin dans le code)

#### B. Onglet "Content"

**1. Subject (Sujet de l'email):**
```
New Contact - {{subject}} - VexarLabs
```

**2. Content (Corps de l'email):**
- Cliquez sur le bouton **"<>"** (HTML mode) en haut à droite
- Collez le contenu complet de `EMAILJS_TEMPLATE.html`
- Cliquez sur **Save**

#### C. Vérifier les Variables

Le template utilise ces variables (elles doivent correspondre au code dans `Contact.tsx`) :
- `{{from_name}}` - Nom du contact
- `{{from_email}}` - Email du contact
- `{{company}}` - Entreprise (optionnel)
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message

### Étape 4 : Tester le Template

1. Dans EmailJS Dashboard, cliquez sur **Test it** dans votre template
2. Remplissez les champs de test :
   ```
   from_name: Jean Dupont
   from_email: jean@exemple.com
   company: Acme Corp
   subject: Demande de partenariat
   message: Bonjour, je souhaite discuter d'un projet...
   ```
3. Cliquez sur **Send Test Email**
4. Vérifiez votre boîte email

## 📝 Variables du Template

| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{from_name}}` | Nom complet du contact | Jean Dupont |
| `{{from_email}}` | Adresse email du contact | jean@exemple.com |
| `{{company}}` | Nom de l'entreprise | Acme Corp |
| `{{subject}}` | Sujet du message | Demande de partenariat |
| `{{message}}` | Contenu du message | Bonjour, je souhaite... |

## 🎨 Personnalisation du Template

### Changer les Couleurs

Pour modifier les couleurs du template, cherchez et remplacez :

**Orange (couleur principale) :**
- `#f97316` → Votre couleur
- `#ea580c` → Votre couleur plus foncée

**Cyan (couleur secondaire) :**
- Actuellement non utilisé dans le template, mais vous pouvez l'ajouter

### Configurer le Logo

Le template inclut une balise image pour le logo VexarLabs :
```html
<img src="https://votre-domaine.com/images/logo-vexarlabs.png" alt="VexarLabs" style="max-width: 200px; height: auto; margin-bottom: 10px;">
```

**⚠️ IMPORTANT : Vous devez remplacer l'URL du logo**

1. **Une fois votre site déployé**, le logo sera accessible à : `https://votre-domaine.manus.space/images/logo-vexarlabs.png`
2. **Remplacez** `https://votre-domaine.com` par votre domaine réel dans le template
3. **Exemple** : Si votre domaine est `vexarlabs.manus.space`, utilisez :
   ```html
   <img src="https://vexarlabs.manus.space/images/logo-vexarlabs.png" alt="VexarLabs" style="max-width: 200px; height: auto; margin-bottom: 10px;">
   ```

**Alternative : Utiliser un autre hébergement**
- Uploadez votre logo sur Imgur, Cloudinary, ou votre propre serveur
- Utilisez l'URL publique dans le template
- Ajustez `max-width` si nécessaire (recommandé : 150-250px)

## 🔧 Dépannage

### Le template ne s'affiche pas correctement ?
- Assurez-vous d'avoir copié **tout le code HTML** (y compris `<!DOCTYPE html>` et `</html>`)
- Vérifiez que vous êtes en mode HTML (bouton **"<>"**)

### Les variables ne fonctionnent pas ?
- Vérifiez que les noms de variables correspondent exactement (sensible à la casse)
- Dans `Contact.tsx`, les `templateParams` doivent correspondre aux variables du template

### L'email arrive en spam ?
- Configurez SPF/DKIM dans EmailJS (voir la documentation EmailJS)
- Utilisez un email professionnel (pas Gmail personnel)

## 📱 Aperçu du Rendu

Le template s'affichera ainsi :

```
┌─────────────────────────────────┐
│     [Header Orange Gradient]    │
│         VexarLabs               │
│   New Contact Form Submission   │
├─────────────────────────────────┤
│                                 │
│  [Subject Badge Jaune]          │
│  Subject: Demande de...         │
│                                 │
│  From: Jean Dupont              │
│  Email: jean@exemple.com        │
│  Company: Acme Corp             │
│                                 │
│  Message:                       │
│  ┌─────────────────────────┐   │
│  │ Bonjour, je souhaite... │   │
│  └─────────────────────────┘   │
│                                 │
│  [Bouton Orange]                │
│  Reply to Jean Dupont           │
│                                 │
├─────────────────────────────────┤
│  [Footer Gris]                  │
│  Sent via VexarLabs contact form│
│  © 2026 VexarLabs               │
└─────────────────────────────────┘
```

## ✅ Checklist Finale

Avant de mettre en production :

- [ ] Template créé dans EmailJS Dashboard
- [ ] Code HTML copié et collé en mode HTML
- [ ] Variables testées avec "Test it"
- [ ] Email de test reçu et bien formaté
- [ ] Template ID copié dans `Contact.tsx` (ligne 43)
- [ ] Service ID et Public Key également configurés

## 📚 Ressources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Template Variables](https://www.emailjs.com/docs/user-guide/template-variables/)
- [HTML Email Best Practices](https://www.emailjs.com/docs/user-guide/html-email-best-practices/)

---

**Besoin d'aide ?** Contactez le support EmailJS : https://www.emailjs.com/contact
