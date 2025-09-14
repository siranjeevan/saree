import { motion } from 'framer-motion'
import { Heart, Star, Eye } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useWishlist } from '@/contexts/WishlistContext'

const SareeCard = ({ saree, index, onViewDetails }) => {
  const { toggleWishlist, isInWishlist } = useWishlist()
  const isWishlisted = isInWishlist(saree)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  }

  const imageVariants = {
    hover: { scale: 1.1 }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <CardHeader className="p-0 relative">
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
            {saree.ImageLink && (
              <motion.img
                src={saree.ImageLink}
                alt={saree.SareeName}
                className="w-full h-64 object-cover"
                variants={imageVariants}
                whileHover="hover"
                loading="lazy"
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Heart Icon */}
            <motion.button
              className={`absolute top-3 right-3 rounded-full p-2 shadow-lg transition-colors ${
                isWishlisted 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-white/90 hover:bg-white text-red-500 hover:text-red-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleWishlist(saree)}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </motion.button>

            {/* Quick View Button */}
            <motion.button
              className="absolute bottom-3 right-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onViewDetails(saree)}
            >
              <Eye className="h-4 w-4" />
            </motion.button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2">
                {saree.SareeName}
              </h3>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 ml-2">
                {saree.Category}
              </Badge>
            </div>

            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-500 ml-2">(4.8)</span>
            </div>

            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {saree.Description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
               ₹ {saree.Price}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <motion.div 
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg rounded-xl"
              onClick={() => onViewDetails(saree)}
            >
              View Details
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default SareeCard