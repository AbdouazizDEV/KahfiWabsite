# KAHFI Website

Site vitrine moderne et professionnel pour KAHFI, startup tech sénégalaise basée à Bambey.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool rapide et moderne
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **React Router** - Navigation SPA

## 📱 Fonctionnalités

- ✅ Design responsive mobile-first
- ✅ Animations fluides au scroll (Framer Motion)
- ✅ Navigation smooth scroll avec menus responsive
- ✅ Formulaires de contact fonctionnels
- ✅ **SEO optimisé** (Meta tags, Schema.org, sitemap.xml, robots.txt)
- ✅ **Référencement Google** complet avec données structurées
- ✅ Accessibilité intégrée (ARIA labels)
- ✅ Performance optimisée (Vite, lazy loading)
- ✅ Carrousels animés pour Équipe et Témoignages
- ✅ Palette de couleurs africaine moderne

## 🎨 Design

- **Couleurs** : Palette africaine (vert, blanc, couleurs chaudes)
- **Typographie** : Inter (moderne et lisible)
- **Style** : Moderne, épuré, professionnel
- **Images** : Unsplash (haute qualité)

## 🏗️ Structure du Projet

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation principale
│   ├── Hero.jsx           # Section d'accueil
│   ├── About.jsx          # À propos de KAHFI
│   ├── Solutions.jsx      # Nos solutions
│   ├── Advantages.jsx     # Nos avantages
│   ├── Team.jsx           # Équipe (carrousel)
│   ├── Testimonials.jsx   # Témoignages (carrousel)
│   ├── Contact.jsx        # Formulaire de contact
│   └── Footer.jsx         # Pied de page
├── App.jsx                # Composant principal
├── main.jsx              # Point d'entrée
└── index.css             # Styles globaux
public/
├── robots.txt            # Fichier robots pour SEO
└── sitemap.xml           # Plan du site XML
```

## 🚀 Installation et Lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS pour envoyer des emails. Suivez ces étapes pour le configurer :

### 1. Créer un compte EmailJS
1. Allez sur [EmailJS](https://www.emailjs.com/)
2. Créez un compte gratuit (200 emails/mois)

### 2. Configurer le Service Email
1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez **Gmail** (ou un autre service)
4. Connectez votre compte Gmail
5. Notez le **Service ID** (ex: `service_s6tda58`)

### 3. Créer un Template Email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template avec ces variables :
   ```
   De: {{from_name}} <{{from_email}}>
   Société: {{company}}
   
   Message:
   {{message}}
   
   ---
   Répondre à: {{reply_to}}
   ```
4. Notez le **Template ID** (ex: `template_xxxxx`)

### 4. Obtenir la Public Key
1. Allez dans **Account** > **General**
2. Copiez la **Public Key**

### 5. Configurer dans le Projet

**Option A : Variables d'environnement (recommandé)**
Créez un fichier `.env` à la racine du projet :
```env
VITE_EMAILJS_SERVICE_ID=service_s6tda58
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Option B : Configuration directe**
Modifiez `src/config/emailjs.js` et remplacez les valeurs par défaut.

### 6. Tester
1. Lancez le projet : `npm run dev`
2. Allez sur la section Contact
3. Envoyez un message test
4. Vérifiez votre boîte email

### 7. Résolution des Problèmes

#### ❌ Erreur : "Request had insufficient authentication scopes"

Cette erreur signifie que votre service Gmail n'a pas les permissions suffisantes. Voici comment la résoudre :

1. **Allez dans EmailJS Dashboard** > **Email Services**
2. **Trouvez votre service Gmail** et cliquez dessus
3. **Supprimez le service actuel** (ou utilisez "Edit")
4. **Reconnectez Gmail** en cliquant sur "Add New Service" > "Gmail"
5. **IMPORTANT** : Lors de la connexion, assurez-vous d'accepter **TOUTES** les permissions, notamment :
   - ✅ "Send email on your behalf" (Envoyer des emails en votre nom)
   - ✅ "Manage your email" (Gérer votre email)
   - ✅ Les autres permissions demandées par Google
6. **Sauvegardez** et testez à nouveau

**Alternative** : Si le problème persiste :
- Utilisez un compte Gmail différent
- Ou utilisez un autre service email (Outlook, SendGrid, etc.) dans EmailJS

#### ❌ Erreur : "Invalid template" ou "Invalid service"
- Vérifiez que le Service ID et Template ID dans votre configuration correspondent exactement à ceux dans EmailJS
- Les IDs sont sensibles à la casse

#### ❌ Erreur : "Public Key invalid"
- Vérifiez que vous utilisez la **Public Key** (pas la Private Key)
- La Public Key commence généralement par des lettres/ chiffres

## 🔍 Optimisation SEO

- ✅ **Meta Tags** : Description, keywords, robots, Googlebot
- ✅ **Schema.org** : Données structurées JSON-LD
- ✅ **Open Graph** : Partage social Facebook/LinkedIn
- ✅ **Twitter Cards** : Partage Twitter optimisé
- ✅ **Sitemap.xml** : Plan du site pour les moteurs de recherche
- ✅ **Robots.txt** : Instructions pour les crawlers
- ✅ **Balises sémantiques** : HTML5 structure
- ✅ **Attributs alt** : Toutes les images ont des descriptions
- ✅ **Canonical URL** : Évite le contenu dupliqué
- ✅ **Performance** : Lazy loading, compression, CDN

## 📧 Contact

- **Email** : contactkahfi@kahfi.sn
- **Téléphone** : +221 77 298 01 05
- **Adresse** : Bambey, Sénégal
- **LinkedIn** : KAHFI
- **Site Web** : https://kahfi.sn

## 🌍 Mission

"Rendre la technologie accessible et utile à tous en Afrique"

## 🚀 Déploiement

Le site est prêt pour le déploiement sur :
- Vercel (recommandé pour React)
- Netlify
- GitHub Pages
- AWS Amplify

---

Développé avec ❤️ par l'équipe KAHFI | 2025
