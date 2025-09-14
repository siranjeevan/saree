import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Menu, X, Sparkles, Heart } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useWishlist } from '@/contexts/WishlistContext'
import { useCart } from '@/contexts/CartContext'

const Header = ({ searchTerm, setSearchTerm, onWishlistClick, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { wishlistCount } = useWishlist()
  const { cartCount } = useCart()

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gradient-to-r from-purple-200 to-pink-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
              SareeShop
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search sarees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80 border-purple-200 focus:border-purple-400 focus:ring-purple-400 rounded-xl"
              />
            </div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl mr-2"
                onClick={onWishlistClick}
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </Button>
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-purple-200"
          >
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search sarees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full border-purple-200 focus:border-purple-400 focus:ring-purple-400 rounded-xl"
                />
              </div>
              <Button 
                variant="outline" 
                className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl mb-2"
                onClick={onWishlistClick}
              >
                <Heart className="h-5 w-5 mr-2" />
                Wishlist ({wishlistCount})
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart ({cartCount})
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header