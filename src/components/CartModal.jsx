import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'

const CartModal = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shopping Cart ({cart.length} items)
              </DialogTitle>
            </DialogHeader>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <motion.div
                    key={item.SareeName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <img
                      src={item.ImageLink || `https://picsum.photos/100/120?random=${item.SareeName}`}
                      alt={item.SareeName}
                      className="w-16 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.SareeName}</h3>
                      <p className="text-purple-600 font-bold">₹{item.Price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.SareeName, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.SareeName, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromCart(item.SareeName)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total: ₹{getCartTotal()}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default CartModal