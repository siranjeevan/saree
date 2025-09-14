import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem('saree-wishlist')
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('saree-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const getUniqueId = (saree) => {
    return `${saree.SareeName}-${saree.Price}-${saree.Category}`.replace(/\s+/g, '-')
  }

  const addToWishlist = (saree) => {
    const uniqueId = getUniqueId(saree)
    setWishlist(prev => {
      if (!prev.find(item => getUniqueId(item) === uniqueId)) {
        return [...prev, { ...saree, uniqueId }]
      }
      return prev
    })
  }

  const removeFromWishlist = (saree) => {
    const uniqueId = getUniqueId(saree)
    setWishlist(prev => prev.filter(item => getUniqueId(item) !== uniqueId))
  }

  const isInWishlist = (saree) => {
    const uniqueId = getUniqueId(saree)
    return wishlist.some(item => getUniqueId(item) === uniqueId)
  }

  const toggleWishlist = (saree) => {
    if (isInWishlist(saree)) {
      removeFromWishlist(saree)
    } else {
      addToWishlist(saree)
    }
  }

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    wishlistCount: wishlist.length
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}