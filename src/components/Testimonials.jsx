import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      name: "Ousmane Diop",
      role: "Directeur, Transport SA",
      company: "Entreprise de Transport",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Kilis-Kalas a transformé notre activité. L'application est intuitive, robuste et adaptée parfaitement au contexte sénégalais. Nos clients adorent la facilité de réservation et le suivi en temps réel.",
      rating: 5,
      project: "Application Kilis-Kalas"
    },
    {
      name: "Mariama Sow",
      role: "Étudiante en Informatique",
      company: "Université de Bambey",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Le programme Code4All a changé ma vie. J'ai appris à développer des applications mobiles de A à Z. Aujourd'hui, je travaille comme développeuse junior chez KAHFI ! Les formateurs sont excellents et très pédagogues.",
      rating: 5,
      project: "Formation Code4All"
    },
    {
      name: "Amadou Sy",
      role: "Fondateur",
      company: "E-Commerce AfrikShop",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Excellente collaboration avec l'équipe KAHFI. Ils ont développé notre plateforme e-commerce en tenant compte de nos contraintes locales (paiement mobile money, livraisons, etc.). Professionnalisme et expertise au rendez-vous !",
      rating: 5,
      project: "Plateforme E-Commerce"
    },
    {
      name: "Sokhna Dieng",
      role: "Directrice des RH",
      company: "TechCorp Senegal",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Nous avons fait appel à KAHFI pour moderniser notre système de gestion. Le résultat dépasse nos attentes. L'équipe est professionnelle, réactive et comprend vraiment les enjeux de notre entreprise.",
      rating: 5,
      project: "Système de Gestion"
    },
    {
      name: "Moussa Faye",
      role: "Étudiant",
      company: "École Supérieure de Bambey",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "Grâce à Code4All, j'ai acquis des compétences en développement web qui m'ont ouvert de nombreuses opportunités. Les projets pratiques et le mentorat personnalisé ont fait toute la différence.",
      rating: 5,
      project: "Formation Code4All"
    },
    {
      name: "Aminata Diallo",
      role: "Directrice de Projet",
      company: "Agence de Développement",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: "KAHFI a développé une application mobile pour notre programme d'aide sociale. L'interface est simple, accessible et répond parfaitement aux besoins de nos bénéficiaires, même dans les zones rurales.",
      rating: 5,
      project: "Application Mobile Sociale"
    }
  ]

  const stats = [
    { number: "95%", label: "Clients Satisfaits" },
    { number: "50+", label: "Projets Réalisés" },
    { number: "98%", label: "Taux de Succès" },
    { number: "4.9/5", label: "Note Moyenne" }
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateX: direction > 0 ? -15 : 15
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0
    },
    exit: (direction) => ({
      y: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateX: direction < 0 ? -15 : 15
    })
  }

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Show 3 cards at a time (desktop) or 1 on mobile
  const itemsPerView = 3
  const visibleItems = testimonials.slice(currentIndex, currentIndex + itemsPerView)
    .concat(testimonials.slice(0, Math.max(0, itemsPerView - (testimonials.length - currentIndex))))

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages de <span className="text-green-600">Nos Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de leurs expériences avec KAHFI
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotateX: { duration: 0.3 }
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: '1000px' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl px-4">
                  {visibleItems.map((testimonial, idx) => (
                    <div
                      key={`${currentIndex}-${idx}`}
                      className={`transform transition-all duration-300 ${
                        idx === 1 ? 'scale-105 z-10' : 'scale-95 opacity-75'
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative h-full">
                        {/* Quote Icon */}
                        <Quote className="w-12 h-12 text-green-100 absolute top-6 right-6" />
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-700 mb-6 leading-relaxed italic relative z-10">
                          "{testimonial.content}"
                        </p>

                        {/* Project Badge */}
                        <div className="mb-4">
                          <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            {testimonial.project}
                          </span>
                        </div>

                        {/* Author */}
                        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-green-200"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.role}
                            </div>
                            <div className="text-xs text-gray-500">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rejoignez Nos Clients Satisfaits
          </h3>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Que vous ayez une idée d'application mobile ou que vous souhaitiez former votre équipe, 
            KAHFI est là pour transformer vos projets en succès.
          </p>
          <a href="#contact" className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            Discutons de Votre Projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
