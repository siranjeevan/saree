import { motion } from 'framer-motion'
import { Sparkles, Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-pink-300" />
              <h3 className="text-2xl font-bold">SareeShop</h3>
            </div>
            <p className="text-purple-200 leading-relaxed">
              Bringing you the finest collection of traditional and modern sarees from across India.
            </p>
            <div className="flex items-center space-x-1 text-pink-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-current" />
              <span>in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Collections', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300">Categories</h4>
            <ul className="space-y-2">
              {['Silk Sarees', 'Cotton Sarees', 'Designer Sarees', 'Bridal Collection'].map((category) => (
                <li key={category}>
                  <motion.a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {category}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-300" />
                <span className="text-purple-200">info@sareeshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-300" />
                <span className="text-purple-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-pink-300" />
                <span className="text-purple-200">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="border-t border-purple-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-purple-200">
            © 2024 SareeShop. All rights reserved. | Crafted with tradition and innovation.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer