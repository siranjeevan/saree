import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, ShoppingBag } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useWishlist } from '@/contexts/WishlistContext'
import WishlistCard from './WishlistCard'

const WishlistModal = ({ isOpen, onClose, onViewDetails }) => {
  const { wishlist, wishlistCount } = useWishlist()

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
        <DialogHeader className="border-b border-purple-200 pb-4">
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <Heart className="h-6 w-6 text-red-500 fill-current" />
            My Wishlist ({wishlistCount})
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[70vh] py-6">
          {wishlist.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-6">Start adding sarees you love to your wishlist!</p>
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {wishlist.map((saree, index) => (
                <WishlistCard
                  key={saree.SareeName}
                  saree={saree}
                  index={index}
                  onViewDetails={onViewDetails}
                />
              ))}
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WishlistModal