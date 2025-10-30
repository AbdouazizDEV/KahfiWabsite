import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, GraduationCap, Code, ArrowRight, CheckCircle } from 'lucide-react'

const Solutions = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const solutions = [
    {
      icon: Smartphone,
      title: "Kilis-Kalas",
      subtitle: "Application de Transport",
      description: "Une solution de transport innovante adaptée au contexte sénégalais, connectant les passagers aux transporteurs locaux de manière sécurisée et efficace.",
      features: [
        "Réservation en temps réel",
        "Paiement mobile intégré",
        "Suivi GPS des véhicules",
        "Système de notation",
        "Support multilingue"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "green"
    },
    {
      icon: GraduationCap,
      title: "Code4All",
      subtitle: "Formation Technologique",
      description: "Programme de formation intensif qui démocratise l'apprentissage du code et des technologies numériques pour les jeunes africains.",
      features: [
        "Formation pratique",
        "Mentorat personnalisé",
        "Projets réels",
        "Certification reconnue",
        "Insertion professionnelle"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "warm"
    },
    {
      icon: Code,
      title: "Services de Développement",
      subtitle: "Solutions Sur Mesure",
      description: "Développement d'applications web et mobiles personnalisées pour les entreprises africaines, avec une expertise locale et des tarifs compétitifs.",
      features: [
        "Développement web",
        "Applications mobiles",
        "E-commerce",
        "Systèmes de gestion",
        "Maintenance et support"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      color: "blue"
    }
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700'
        }
      case 'warm':
        return {
          bg: 'bg-warm-100',
          text: 'text-warm-600',
          button: 'bg-warm-600 hover:bg-warm-700'
        }
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        }
    }
  }

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-green-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions technologiques innovantes développées par et pour l'Afrique, 
            répondant aux défis spécifiques du continent.
          </p>
        </motion.div>

        <div className="space-y-16">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color)
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <solution.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {solution.title}
                      </h3>
                      <p className={`text-sm font-medium ${colors.text}`}>
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className={`w-5 h-5 ${colors.text}`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button className={`${colors.button} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2`}>
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Image */}
                <div className={!isEven ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${solution.color}-600/20 to-transparent rounded-xl`}></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-green-50 to-warm-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Intéressé par nos solutions ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nos solutions 
            peuvent transformer votre entreprise ou votre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">
              Voir nos réalisations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions
