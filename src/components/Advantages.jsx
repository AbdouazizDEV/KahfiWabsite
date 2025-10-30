import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Globe, Heart, Zap, Shield, Target } from 'lucide-react'

const Advantages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const advantages = [
    {
      icon: Users,
      title: "Culture Locale",
      description: "Notre équipe comprend parfaitement les défis et opportunités du contexte africain, garantissant des solutions pertinentes et adaptées.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Formation Intégrée",
      description: "Chaque projet inclut la formation des équipes locales, créant un écosystème durable de talents technologiques.",
      color: "warm"
    },
    {
      icon: Globe,
      title: "Solutions Adaptées",
      description: "Nos applications sont conçues spécifiquement pour l'Afrique, prenant en compte les contraintes techniques et culturelles locales.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Innovation Rapide",
      description: "Nous développons rapidement des prototypes et itérons selon les retours utilisateurs, garantissant des solutions efficaces.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Nos solutions intègrent les meilleures pratiques de sécurité, adaptées aux défis spécifiques du continent africain.",
      color: "red"
    },
    {
      icon: Target,
      title: "Impact Mesurable",
      description: "Chaque projet vise un impact social concret, avec des métriques claires pour mesurer le succès et l'amélioration continue.",
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200'
        }
      case 'warm':
        return {
          bg: 'bg-warm-100',
          text: 'text-warm-600',
          border: 'border-warm-200'
        }
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        }
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200'
        }
      case 'red':
        return {
          bg: 'bg-red-100',
          text: 'text-red-600',
          border: 'border-red-200'
        }
      case 'indigo':
        return {
          bg: 'bg-indigo-100',
          text: 'text-indigo-600',
          border: 'border-indigo-200'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200'
        }
    }
  }

  const stats = [
    { number: "100%", label: "Équipe locale", description: "Développeurs sénégalais" },
    { number: "24/7", label: "Support local", description: "Disponible en français" },
    { number: "50+", label: "Projets réalisés", description: "Solutions déployées" },
    { number: "95%", label: "Satisfaction client", description: "Retours positifs" }
  ]

  return (
    <section id="advantages" className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir <span className="text-green-600">KAHFI</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre approche unique combine expertise technique, compréhension culturelle 
            et engagement social pour créer des solutions technologiques durables.
          </p>
        </motion.div>

        {/* Avantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color)
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${colors.border}`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <advantage.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nos Résultats en Chiffres
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              L'Impact de Notre Approche
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Formation des Talents Locaux
                  </h4>
                  <p className="text-gray-600">
                    Plus de 50 jeunes développeurs formés et intégrés dans l'écosystème tech sénégalais, 
                    créant un effet multiplicateur dans leurs communautés.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-warm-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solutions Adaptées au Contexte
                  </h4>
                  <p className="text-gray-600">
                    Nos applications prennent en compte les spécificités locales : langues, 
                    modes de paiement, contraintes réseau et habitudes d'usage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Innovation Durable
                  </h4>
                  <p className="text-gray-600">
                    Chaque projet s'accompagne d'un transfert de compétences et d'une 
                    stratégie de maintenance locale, garantissant la pérennité des solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Impact social de KAHFI"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -left-4 -bottom-4 bg-white rounded-xl shadow-lg p-4 max-w-xs"
            >
              <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Développeurs formés</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -right-4 -top-4 bg-white rounded-xl shadow-lg p-4 max-w-xs"
            >
              <div className="text-2xl font-bold text-warm-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Satisfaction client</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Advantages
