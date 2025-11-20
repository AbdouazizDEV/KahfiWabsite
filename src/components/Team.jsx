import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, Code, Users, Lightbulb, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const teamMembers = [
    {
      name: "Abdou Aziz Diop",
      role: " Développeur Full-Stack & CEO & Fondateur",
      bio: "Passionné par l'innovation technologique et l'impact social en Afrique.",
      image: "https://res.cloudinary.com/dhivn2ahm/image/upload/v1761791631/WhatsApp_Image_2025-10-30_at_02.33.20_az4vym.jpg",
      social: {
        linkedin: "https://linkedin.com/in/assane-diop",
        github: "https://github.com/assane-diop",
        email: "assane@kahfi.sn"
      }
    },
    {
      name: "Fatou Bintou Diallo",
      role: "Cyber Sécurité & DevOps & SysAdmin",
      bio: "Spécialiste en cybersécurité, développement et administration de systèmes.",
      image: "https://res.cloudinary.com/dhivn2ahm/image/upload/v1763639172/WhatsApp_Image_2025-11-17_at_13.56.11_haddjp.jpg",
      social: {
        linkedin: "https://linkedin.com/in/fatou-bintou-diallo",
        github: "https://github.com/fatou-bintou-diallo",
        email: "fatou@kahfi.sn"
      }
    },
    {
      name: "Serigne Khalifa Ababacar Sy Nguirane",
      role: "Ui/Ux Designer",
      bio: "Spécialiste en design UI/UX et développement web.",
      image: "https://res.cloudinary.com/dhivn2ahm/image/upload/v1761790083/WhatsApp_Image_2025-10-30_at_02.07.26_foor3i.jpg",
      social: {
        linkedin: "https://linkedin.com/in/amadou-ba",
        github: "https://github.com/amadou-ba",
        email: "amadou@kahfi.sn"
      }
    },
    {
      name: "Issa Diol",
      role: "Développeur Full-Stack & Chef de Projet & lead developer",
      bio: "Spécialiste en développement web et systèmes distribués.",
      image: "https://res.cloudinary.com/dhivn2ahm/image/upload/v1761836036/WhatsApp_Image_2025-10-30_at_14.52.03_vi9xxb.jpg",
      social: {
        linkedin: "https://linkedin.com/in/issa-diol",
        github: "https://github.com/issa-diol",
        email: "issa@kahfi.sn"
      }
    },
    {
      name: "Khardiata Thiam",
      role: "Développeuse web & Référente digitale & Community Manager",
      bio: "Spécialiste en développement web et référente digitale & community manager.",
      image: "https://res.cloudinary.com/dhivn2ahm/image/upload/v1763639171/WhatsApp_Image_2025-11-17_at_13.56.39_vtbseq.jpg",
      social: {
        linkedin: "https://linkedin.com/in/khardiata-thiam-7b272b2b3",
        email: "khardiata@kahfi.sn"
      }
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [teamMembers.length])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons ensemble pour atteindre nos objectifs communs"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous encourageons la créativité et les nouvelles idées"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons toujours la meilleure qualité dans tout ce que nous faisons"
    },
    {
      icon: Code,
      title: "Apprentissage",
      description: "Nous grandissons ensemble grâce à l'apprentissage continu"
    }
  ]

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre <span className="text-green-600">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée de développeurs, designers et formateurs dédiés à 
            révolutionner la technologie en Afrique.
          </p>
        </motion.div>

        {/* Team Members Carousel */}
        <div className="relative mb-16">
          {/* Carousel Container */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.4 }
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: '1000px' }}
              >
                <div className="max-w-4xl mx-auto w-full px-4">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Image */}
                      <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                          <img
                            src={teamMembers[currentIndex].image}
                            alt={teamMembers[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
                          <div className="bg-green-600 text-white px-4 py-2 rounded-full text-center font-semibold shadow-lg">
                            {teamMembers[currentIndex].role}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {teamMembers[currentIndex].name}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {teamMembers[currentIndex].bio}
                          </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex items-center space-x-4 pt-4">
                          <a
                            href={teamMembers[currentIndex].social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                          </a>
                          <a
                            href={teamMembers[currentIndex].social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300 group"
                            aria-label="GitHub"
                          >
                            <Github className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                          </a>
                          <a
                            href={`mailto:${teamMembers[currentIndex].social.email}`}
                            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                            aria-label="Email"
                          >
                            <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 z-10 group"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 z-10 group"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-warm-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nos Valeurs d'Équipe
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="w-8 h-8 text-green-600" />
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

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez Notre Équipe
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Vous êtes passionné par la technologie et souhaitez avoir un impact positif en Afrique ? 
            Nous recherchons constamment de nouveaux talents pour rejoindre notre aventure.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Nous Contacter</span>
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
