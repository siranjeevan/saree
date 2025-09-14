import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('saree-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('saree-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (saree) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.SareeName === saree.SareeName)
      if (existingItem) {
        return prev.map(item =>
          item.SareeName === saree.SareeName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...saree, quantity: 1 }]
    })
  }

  const removeFromCart = (sareeName) => {
    setCart(prev => prev.filter(item => item.SareeName !== sareeName))
  }

  const updateQuantity = (sareeName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(sareeName)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.SareeName === sareeName
          ? { ...item, quantity }
          : item
      )
    )
  }

  const isInCart = (sareeName) => {
    return cart.some(item => item.SareeName === sareeName)
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.Price * item.quantity), 0)
  }

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    isInCart,
    getCartTotal,
    cartCount: getCartItemsCount()
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}