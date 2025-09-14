import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Heart, Star, Share2, Truck, Shield, RotateCcw, Sparkles, Eye } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/contexts/CartContext'
import { useWishlist } from '@/contexts/WishlistContext'

const SareeModal = ({ saree, isOpen, onClose, index }) => {
  const { addToCart, isInCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Reset fullscreen when modal closes or saree changes
  React.useEffect(() => {
    if (!isOpen) {
      setIsFullscreen(false)
    }
  }, [isOpen])

  React.useEffect(() => {
    if (saree) {
      setIsFullscreen(false)
    }
  }, [saree])
  
  if (!saree) return null

  const handleAddToCart = () => {
    addToCart(saree)
  }

  const handleImageClick = () => {
    setIsFullscreen(true)
  }

  const handleCloseFullscreen = () => {
    setIsFullscreen(false)
  }

  const handleWishlistClick = () => {
    toggleWishlist(saree)
  }

  const floatingParticles = [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }))

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.2, duration: 0.5 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.3, duration: 0.5 }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 rounded-2xl overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Animated Mesh Gradient */}
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
                  }}
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 40% 70%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Rotating Geometric Shapes */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-300/30 rounded-full"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 rounded-lg"
                  animate={{ 
                    rotate: -360,
                    scale: [1.2, 0.8, 1.2],
                    x: [0, -40, 0],
                    y: [0, 40, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 11, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Wave Pattern */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)'
                  }}
                  animate={{
                    x: [-100, 100, -100],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Floating Orbs */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`orb-${i}-${saree?.SareeName || 'default'}`}
                    className="absolute w-16 h-16 rounded-full opacity-20"
                    style={{
                      background: `radial-gradient(circle, ${['rgba(147, 51, 234, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(59, 130, 246, 0.4)'][i % 3]} 0%, transparent 70%)`,
                      left: `${20 + (i * 15)}%`,
                      top: `${10 + (i * 12)}%`
                    }}
                    animate={{
                      y: [0, -50, 0],
                      x: [0, 30, -30, 0],
                      scale: [1, 1.5, 0.8, 1],
                      opacity: [0.2, 0.5, 0.1, 0.2]
                    }}
                    transition={{
                      duration: 8 + i,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Floating Particles */}
                {floatingParticles.map((particle) => (
                  <motion.div
                    key={`particle-${particle.id}-${saree?.SareeName || 'default'}`}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                    }}
                    animate={{
                      y: [-30, 30, -30],
                      x: [-15, 15, -15],
                      opacity: [0.4, 0.8, 0.2, 0.4],
                      scale: [1, 2, 0.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Animated Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <motion.path
                    d="M0,100 Q150,50 300,100 T600,100"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M0,200 Q200,150 400,200 T800,200"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                      <stop offset="50%" stopColor="rgba(236, 72, 153, 0.6)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                      <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
                      <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg backdrop-blur-sm"
                onClick={onClose}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "rgba(255, 255, 255, 1)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              <div className="relative z-10 p-8">
                <DialogHeader className="mb-6">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent text-center relative">
                      <motion.div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="h-6 w-6 text-purple-400 opacity-60" />
                      </motion.div>
                      {saree.SareeName}
                      <motion.div
                        className="absolute -bottom-2 right-1/4"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="h-4 w-4 text-pink-400 opacity-60" />
                      </motion.div>
                    </DialogTitle>
                  </motion.div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Image Section */}
                  <motion.div 
                    className="space-y-6"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="relative group">
                      <motion.img
                        src={saree.ImageLink || `https://picsum.photos/600/800?random=${index + 1}`}
                        alt={saree.SareeName}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/600x800/8B5CF6/FFFFFF?text=${encodeURIComponent(saree.SareeName)}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.button 
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageClick()
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="h-5 w-5 text-gray-700" />
                      </motion.button>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={`https://picsum.photos/150/200?random=${index + i + 50}`}
                            alt={`${saree.SareeName} view ${i + 1}`}
                            className="w-full h-24 object-cover rounded-xl border-3 border-white shadow-lg hover:border-purple-300 transition-all duration-300"
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/150x200/8B5CF6/FFFFFF?text=${i + 1}`
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Details Section */}
                  <motion.div 
                    className="space-y-8"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Price and Category */}
                    <motion.div 
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden"
                      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10"
                        animate={{ x: [-100, 100, -100] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="relative flex items-center justify-between mb-4">
                        <motion.span 
                          className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          ₹ {saree.Price}
                        </motion.span>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm shadow-lg">
                            {saree.Category}
                          </Badge>
                        </motion.div>
                      </div>

                      {/* Rating */}
                      <div className="relative flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                            >
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                        <motion.span 
                          className="text-gray-600 font-medium"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                        >
                          4.8 (127 reviews)
                        </motion.span>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div 
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                      <motion.h3 
                        className="text-lg font-semibold text-gray-800 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        Description
                      </motion.h3>
                      <motion.p 
                        className="text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        {saree.Description}
                      </motion.p>
                    </motion.div>

                    {/* Features */}
                    <motion.div 
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.h3 
                        className="relative text-lg font-semibold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        Features
                      </motion.h3>
                      <div className="relative grid grid-cols-2 gap-4">
                        {[
                          { icon: Truck, text: "Free Delivery", color: "text-green-500", delay: 1.2 },
                          { icon: Shield, text: "Quality Assured", color: "text-blue-500", delay: 1.3 },
                          { icon: RotateCcw, text: "Easy Returns", color: "text-purple-500", delay: 1.4 },
                          { icon: Heart, text: "Handcrafted", color: "text-red-500", delay: 1.5 }
                        ].map((feature, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-center space-x-3 p-2 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: feature.delay }}
                            whileHover={{ 
                              x: 10, 
                              backgroundColor: "rgba(255, 255, 255, 0.5)",
                              scale: 1.05
                            }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                            >
                              <feature.icon className={`h-5 w-5 ${feature.color}`} />
                            </motion.div>
                            <span className="text-sm text-gray-600">{feature.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      <motion.div 
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.4)"
                        }} 
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden rounded-xl"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
                          animate={{ x: [-100, 100, -100] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <Button 
                          onClick={handleAddToCart}
                          className="relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-xl py-4 text-lg font-semibold rounded-xl overflow-hidden"
                        >
                          <motion.div
                            animate={{ rotate: isInCart(saree.SareeName) ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ShoppingCart className="h-6 w-6 mr-3" />
                          </motion.div>
                          {isInCart(saree.SareeName) ? 'Added to Cart' : 'Add to Cart'}
                        </Button>
                      </motion.div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <motion.div 
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.2)"
                          }} 
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="outline" 
                            className={`w-full rounded-xl py-3 relative overflow-hidden ${
                              isInWishlist(saree) 
                                ? 'border-red-200 text-red-600 hover:bg-red-50' 
                                : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                            }`}
                            onClick={handleWishlistClick}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <Heart className={`h-5 w-5 mr-2 ${
                                isInWishlist(saree) ? 'fill-current' : ''
                              }`} />
                            </motion.div>
                            {isInWishlist(saree) ? 'In Wishlist' : 'Wishlist'}
                          </Button>
                        </motion.div>
                        <motion.div 
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.2)"
                          }} 
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 rounded-xl py-3 relative overflow-hidden">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Share2 className="h-5 w-5 mr-2" />
                            </motion.div>
                            Share
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseFullscreen}
          >
            <motion.button
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm"
              onClick={handleCloseFullscreen}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <motion.img
              src={saree.ImageLink || `https://picsum.photos/800/1000?random=${index + 1}`}
              alt={saree.SareeName}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              // onError={(e) => {
              //   e.target.src = `https://via.placeholder.com/800x1000/8B5CF6/FFFFFF?text=${encodeURIComponent(saree.SareeName)}`
              // }}
            />
            
            <motion.div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white font-semibold text-lg">{saree.SareeName}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

export default SareeModal