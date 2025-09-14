import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'
import SareeGrid from './SareeGrid'
import SareeModal from './SareeModal'
import WishlistModal from './WishlistModal'
import CartModal from './CartModal'
import FilterBar from './FilterBar'
import { fetchFromGoogleSheet } from '../services/api.js'

const SareeShowcase = () => {
  const [sarees, setSarees] = useState([])
  const [filteredSarees, setFilteredSarees] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState(['All'])
  const [selectedSaree, setSelectedSaree] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false)
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)

  useEffect(() => {
    fetchSarees()
  }, [])

  useEffect(() => {
    filterSarees()
  }, [sarees, searchTerm, selectedCategory, priceRange, sortBy])

  const fetchSarees = async () => {
    try {
      setLoading(true)
      const data = await fetchFromGoogleSheet()
      
      setSarees(data)
      const uniqueCategories = ['All', ...new Set(data.map(saree => saree.Category))]
      setCategories(uniqueCategories)
    } catch (error) {
      console.error('Error fetching sarees from Google Sheets:', error)
      setSarees([])
      setCategories(['All'])
    } finally {
      setLoading(false)
    }
  }

  const filterSarees = () => {
    let filtered = sarees

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(saree => saree.Category === selectedCategory)
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(saree =>
        saree.SareeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        saree.Description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Price filter
    if (priceRange !== 'all') {
      filtered = filtered.filter(saree => {
        const price = parseInt(saree.Price.replace(/[^0-9]/g, ''))
        switch (priceRange) {
          case '0-1000': return price < 1000
          case '1000-3000': return price >= 1000 && price <= 3000
          case '3000-5000': return price >= 3000 && price <= 5000
          case '5000+': return price > 5000
          default: return true
        }
      })
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.Price.replace(/[^0-9]/g, ''))
        const priceB = parseInt(b.Price.replace(/[^0-9]/g, ''))
        return priceA - priceB
      })
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.Price.replace(/[^0-9]/g, ''))
        const priceB = parseInt(b.Price.replace(/[^0-9]/g, ''))
        return priceB - priceA
      })
    }

    setFilteredSarees(filtered)
  }

  const handleViewDetails = (saree) => {
    setSelectedSaree(saree)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedSaree(null)
  }

  const handleWishlistClick = () => {
    setIsWishlistModalOpen(true)
  }

  const handleCloseWishlistModal = () => {
    setIsWishlistModalOpen(false)
  }

  const handleCartClick = () => {
    setIsCartModalOpen(true)
  }

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-100 via-purple-50 to-cyan-100">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <div className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            Loading beautiful sarees...
            <Sparkles className="h-5 w-5 text-purple-500" />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-50 to-cyan-100">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onWishlistClick={handleWishlistClick}
        onCartClick={handleCartClick}
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Exquisite Saree Collection
            </motion.h2>
            <motion.p 
              className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover our beautiful range of traditional and modern sarees, 
              crafted with love and attention to detail. Each piece tells a story of elegance and grace.
            </motion.p>
            <motion.div 
              className="flex justify-center items-center space-x-2 text-yellow-500 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                >
                  <Sparkles className="h-6 w-6 fill-current" />
                </motion.div>
              ))}
              <span className="text-gray-600 ml-2">Trusted by 10,000+ customers</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
          filteredCount={filteredSarees.filter(saree => saree.ImageLink && saree.ImageLink.trim() !== '').length}
        />

        <SareeGrid 
          sarees={filteredSarees} 
          onViewDetails={handleViewDetails}
        />
      </div>
      
      <SareeModal
        saree={selectedSaree}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        index={sarees.findIndex(s => s === selectedSaree)}
      />
      
      <WishlistModal
        isOpen={isWishlistModalOpen}
        onClose={handleCloseWishlistModal}
        onViewDetails={handleViewDetails}
      />
      
      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCartModal}
      />
      
      <Footer />
    </div>
  )
}

export default SareeShowcase