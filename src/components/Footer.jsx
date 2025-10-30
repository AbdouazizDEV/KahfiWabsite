import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'À Propos', href: '#about' },
      { name: 'Solutions', href: '#solutions' },
      { name: 'Équipe', href: '#team' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    solutions: [
      { name: 'Kilis-Kalas', href: '#solutions' },
      { name: 'Code4All', href: '#solutions' },
      { name: 'Services Dev', href: '#solutions' },
      { name: 'Formation', href: '#solutions' }
    ],
    legal: [
      { name: 'Mentions Légales', href: '#' },
      { name: 'Politique de Confidentialité', href: '#' },
      { name: 'CGV', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/kahfi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contactkahfi@kahfi.sn', label: 'Email' },
    { icon: Phone, href: 'tel:+221772980105', label: 'Téléphone' }
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="https://res.cloudinary.com/dhivn2ahm/image/upload/v1755515596/WhatsApp_Image_2025-08-09_at_01.27.37_2_cl95mc.jpg" 
                  alt="KAHFI Logo" 
                  className="h-10 w-auto rounded-[10px]"
                />
                <span className="text-xl font-bold">KAHFI</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Startup tech sénégalaise qui révolutionne l'approche technologique en Afrique 
                en combinant innovation, formation et impact social.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bambey, Sénégal</span>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Légal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KAHFI. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <span className="text-sm">Retour en haut</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
