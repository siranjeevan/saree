import { motion } from 'framer-motion'
import SareeCard from './SareeCard'

const SareeGrid = ({ sarees, onViewDetails }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const sareesWithImages = sarees.filter(saree => saree.ImageLink && saree.ImageLink.trim() !== '')
  
  if (sareesWithImages.length === 0) {
    return (
      <motion.div 
        className="text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg max-w-md mx-auto">
          <div className="text-6xl mb-4">🥻</div>
          <p className="text-gray-600 text-xl mb-2">No sarees found</p>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sareesWithImages.map((saree, index) => (
        <SareeCard
          key={index}
          saree={saree}
          index={index}
          onViewDetails={onViewDetails}
        />
      ))}
    </motion.div>
  )
}

export default SareeGrid