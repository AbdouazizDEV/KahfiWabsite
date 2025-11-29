import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailjs'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [emailJSReady, setEmailJSReady] = useState(false)

  useEffect(() => {
    // Initialiser EmailJS avec la clé publique
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
      setEmailJSReady(true)
    } else {
      console.warn('EmailJS non configuré. Veuillez configurer vos clés dans src/config/emailjs.js ou via les variables d\'environnement.')
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Effacer l'erreur quand l'utilisateur tape
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Vérifier si EmailJS est configuré
    if (!emailJSReady || !isEmailJSConfigured()) {
      setError('Le service d\'envoi d\'email n\'est pas configuré. Veuillez nous contacter directement par email ou téléphone.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Préparer les paramètres pour EmailJS
      // IMPORTANT: Les noms de paramètres doivent correspondre exactement à ceux de votre template EmailJS
      const templateParams = {
        titre: `Nouveau message de ${formData.name} - KAHFI Website`,
        nom: formData.name,
        Temps: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        message: formData.message + (formData.company ? `\n\nSociété: ${formData.company}` : ''),
        Email: formData.email
      }

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )

      // Vérifier la réponse
      if (response.status === 200) {
        // Succès
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
        
        // Réinitialiser après 5 secondes
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }

    } catch (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err)
      
      // Messages d'erreur plus précis avec solutions
      let errorMessage = ''
      
      if (err.text) {
        // Erreur spécifique de permissions Gmail
        if (err.text.includes('insufficient authentication scopes') || err.text.includes('authentication scopes')) {
          errorMessage = 'Permissions Gmail insuffisantes. Veuillez reconnecter votre service Gmail dans EmailJS avec les permissions "Send email on your behalf". Consultez le README pour plus d\'informations.'
        } else if (err.text.includes('Invalid template') || err.text.includes('template')) {
          errorMessage = 'Template EmailJS invalide. Vérifiez que le Template ID est correct dans votre configuration.'
        } else if (err.text.includes('Invalid service') || err.text.includes('service')) {
          errorMessage = 'Service EmailJS invalide. Vérifiez que le Service ID est correct dans votre configuration.'
        } else {
          errorMessage = `Erreur: ${err.text}`
        }
      } else if (err.message) {
        if (err.message.includes('insufficient authentication scopes') || err.message.includes('authentication')) {
          errorMessage = 'Permissions Gmail insuffisantes. Veuillez reconnecter votre service Gmail dans EmailJS.'
        } else {
          errorMessage = `Erreur: ${err.message}`
        }
      } else {
        errorMessage = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement via email ou téléphone.'
      }
      
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kahficontact1010@gmail.com",
      link: "mailto:kahficontact1010@gmail.com",
      color: "green"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 77 298 01 05",
      link: "tel:+221772980105",
      color: "warm"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Bambey, Sénégal",
      link: "https://maps.google.com/?q=Bambey,Senegal",
      color: "blue"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "KAHFI SN",
      link: "https://linkedin.com/company/kahfi",
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          hover: 'hover:bg-green-200'
        }
      case 'warm':
        return {
          bg: 'bg-warm-100',
          text: 'text-warm-600',
          hover: 'hover:bg-warm-200'
        }
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          hover: 'hover:bg-blue-200'
        }
      case 'indigo':
        return {
          bg: 'bg-indigo-100',
          text: 'text-indigo-600',
          hover: 'hover:bg-indigo-200'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          hover: 'hover:bg-gray-200'
        }
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez <span className="text-green-600">KAHFI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à transformer vos idées en solutions technologiques ? 
            Contactez-nous pour discuter de votre projet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informations de Contact
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color)
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg ${colors.bg} ${colors.hover} transition-colors duration-200`}
                  >
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <info.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {info.title}
                      </div>
                      <div className={`text-sm ${colors.text}`}>
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Vidéo (style GIF) */}
            <div className="relative">
              <video
                src="https://res.cloudinary.com/dhivn2ahm/video/upload/v1764399998/WhatsApp_Video_2025-11-29_at_07.05.56_eiltog.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl shadow-lg w-full h-auto"
                style={{ objectFit: 'cover' }}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un Message
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Envoyé !
                </h4>
                <p className="text-gray-600">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Message d'erreur amélioré */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-300 rounded-lg p-6"
                  >
                    <div className="flex items-start space-x-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-red-900 mb-2">Erreur d'envoi</h4>
                        <p className="text-sm text-red-800 mb-4">{error}</p>
                      </div>
                    </div>
                    
                    {error.includes('Permissions Gmail insuffisantes') && (
                      <div className="bg-white rounded-lg p-4 border border-red-200">
                        <h5 className="font-semibold text-red-900 mb-3 text-sm">📋 Solution étape par étape :</h5>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-red-800">
                          <li>Allez sur <a href="https://dashboard.emailjs.com/admin/integration" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">EmailJS Dashboard → Email Services</a></li>
                          <li>Cliquez sur votre service Gmail existant</li>
                          <li>Supprimez-le (ou désactivez-le temporairement)</li>
                          <li>Cliquez sur <strong>"Add New Service"</strong> → Sélectionnez <strong>"Gmail"</strong></li>
                          <li>Cliquez sur <strong>"Connect Account"</strong></li>
                          <li><strong className="text-red-900">IMPORTANT :</strong> Acceptez <strong>TOUTES</strong> les permissions demandées par Google, notamment :<br />
                            <span className="ml-4 block mt-1">✅ "Send email on your behalf"<br />
                            ✅ "Manage your email"<br />
                            ✅ Toutes les autres permissions</span>
                          </li>
                          <li>Sauvegardez et testez à nouveau le formulaire</li>
                        </ol>
                        <div className="mt-4 pt-4 border-t border-red-200">
                          <p className="text-xs text-red-700">
                            <strong>Note :</strong> Si le problème persiste, essayez avec un autre compte Gmail ou utilisez un autre service email dans EmailJS.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {(error.includes('Invalid template') || error.includes('Invalid service')) && (
                      <div className="bg-white rounded-lg p-4 border border-red-200">
                        <h5 className="font-semibold text-red-900 mb-2 text-sm">Vérifications nécessaires :</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                          <li>Vérifiez que le <strong>Service ID</strong> et <strong>Template ID</strong> dans votre configuration correspondent exactement à ceux dans EmailJS</li>
                          <li>Les IDs sont sensibles à la casse</li>
                          <li>Consultez le fichier <code className="bg-red-100 px-1 rounded">src/config/emailjs.js</code> ou vos variables d'environnement</li>
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise/Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                Temps de Réponse
              </h4>
              <p className="text-sm text-green-700">
                Nous nous engageons à répondre à tous les messages dans un délai de 24 heures 
                ouvrées. Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
