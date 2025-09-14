import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const FilterBar = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange,
  sortBy,
  setSortBy,
  filteredCount 
}) => {
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹1,000', value: '0-1000' },
    { label: '₹1,000 - ₹3,000', value: '1000-3000' },
    { label: '₹3,000 - ₹5,000', value: '3000-5000' },
    { label: 'Above ₹5,000', value: '5000+' }
  ]

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest First', value: 'newest' }
  ]

  const clearFilters = () => {
    setSelectedCategory('All')
    setPriceRange('all')
    setSortBy('featured')
  }

  const hasActiveFilters = selectedCategory !== 'All' || priceRange !== 'all' || sortBy !== 'featured'

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Filter Header */}
        <div className="flex items-center space-x-3">
          <SlidersHorizontal className="h-5 w-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {filteredCount} items
          </Badge>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-purple-200 rounded-lg px-3 py-2 bg-white/80 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-200 min-w-[150px]"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border border-purple-200 rounded-lg px-3 py-2 bg-white/80 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-200 min-w-[180px]"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-purple-200 rounded-lg px-3 py-2 bg-white/80 backdrop-blur-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-200 min-w-[180px]"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-end"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="border-red-200 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <motion.div 
          className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-purple-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {selectedCategory !== 'All' && (
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              Category: {selectedCategory}
            </Badge>
          )}
          {priceRange !== 'all' && (
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
              Price: {priceRanges.find(r => r.value === priceRange)?.label}
            </Badge>
          )}
          {sortBy !== 'featured' && (
            <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
              Sort: {sortOptions.find(s => s.value === sortBy)?.label}
            </Badge>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

export default FilterBar