import SareeShowcase from './components/SareeShowcase'
import { WishlistProvider } from './contexts/WishlistContext'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <div className="App">
          <SareeShowcase />
        </div>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
