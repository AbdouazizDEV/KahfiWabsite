import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, Heart, Lightbulb, Globe } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const vision = {
    icon: Eye,
    title: "Notre Vision",
    description: "Devenir le leader technologique de référence en Afrique de l'Ouest, en créant un écosystème numérique inclusif qui transforme les défis africains en opportunités d'innovation."
  }

  const mission = {
    icon: Heart,
    title: "Notre Mission",
    description: "Démocratiser l'accès à la technologie en formant les talents locaux, en développant des solutions adaptées au contexte africain et en créant des emplois durables dans le secteur numérique."
  }

  const problem = {
    icon: Lightbulb,
    title: "Problématique Résolue",
    description: "En Afrique, la technologie est souvent importée sans adaptation au contexte local. Nous créons des solutions pensées par et pour les Africains, répondant aux vrais besoins du continent."
  }

  const values = [
    {
      icon: Globe,
      title: "Innovation Locale",
      description: "Nous développons des solutions adaptées au contexte africain"
    },
    {
      icon: Heart,
      title: "Impact Social",
      description: "Chaque projet vise à améliorer la vie des communautés locales"
    },
    {
      icon: Eye,
      title: "Excellence",
      description: "Nous nous engageons à fournir des produits de qualité mondiale"
    },
    {
      icon: Lightbulb,
      title: "Formation",
      description: "Nous investissons dans la formation des talents africains"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À Propos de <span className="text-green-600">KAHFI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une startup tech sénégalaise qui révolutionne l'approche technologique en Afrique 
            en combinant innovation, formation et impact social.
          </p>
        </motion.div>

        {/* Vision, Mission, Problématique */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[vision, mission, problem].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Notre Histoire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondée à Bambey, au cœur du Sénégal, KAHFI est née de la conviction que 
                l'Afrique peut et doit être à la pointe de l'innovation technologique.
              </p>
              <p>
                Notre équipe, composée de développeurs, designers et formateurs locaux, 
                comprend les défis uniques du continent africain et développe des solutions 
                qui répondent aux vrais besoins des populations.
              </p>
              <p>
                De la formation des jeunes talents aux applications mobiles révolutionnaires, 
                nous construisons un écosystème technologique durable et inclusif.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Équipe KAHFI en formation"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
          </div>
        </motion.div>

        {/* Nos Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
