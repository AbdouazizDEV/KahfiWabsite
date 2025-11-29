// Configuration EmailJS pour KAHFI
// Remplacez ces valeurs par vos propres clés depuis le dashboard EmailJS
// https://dashboard.emailjs.com/admin

export const EMAILJS_CONFIG = {
  // Service ID (obtenu lors de la création du service Gmail dans EmailJS)
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_s6tda58',
  
  // Template ID (à créer dans EmailJS > Email Templates)
  // Créez un template avec ces variables (doivent correspondre exactement):
  // - {{titre}} - Titre du message
  // - {{nom}} - Nom de l'expéditeur
  // - {{Temps}} - Heure d'envoi
  // - {{message}} - Message
  // - {{Email}} - Email de l'expéditeur
  // Exemple: template_hhotznf
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_hhotznf',
  
  // Public Key (API Key publique depuis EmailJS > Account > API Keys)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

// Vérifier si EmailJS est configuré
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY &&
    EMAILJS_CONFIG.PUBLIC_KEY !== ''
  )
}

