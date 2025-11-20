import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Target } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToSolutions = () => {
    const element = document.querySelector('#solutions')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-warm-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Basé à Bambey, Sénégal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Rendre la technologie{' '}
              <span className="text-green-600">accessible</span>{' '}
              et utile à tous en{' '}
              <span className="text-warm-600">Afrique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              KAHFI SN développe des solutions technologiques innovantes adaptées au contexte africain, 
              en formant les talents locaux et en créant des applications qui répondent aux vrais besoins du continent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button onClick={scrollToSolutions} className="btn-primary flex items-center justify-center space-x-2">
                <span>Découvrir nos solutions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                Nous contacter
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Étudiants formés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Solutions développées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Local</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Équipe KAHFI travaillant sur la technologie"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-4 -bottom-4 bg-white rounded-xl shadow-lg p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Équipe locale</div>
                  <div className="text-sm text-gray-600">Talents sénégalais</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -right-4 -top-4 bg-white rounded-xl shadow-lg p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warm-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-warm-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Impact local</div>
                  <div className="text-sm text-gray-600">Solutions adaptées</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
