import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer'
import Footer from './components/layouts/Footer'
import Cart from './components/pages/cart/Cart'
import ItemItself from './components/pages/itemItself/ItemItself'
import { CartContextProvider } from './contexts/CartContext'
import Checkout from './components/pages/checkout/Checkout'


function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:name' element={<ItemListContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/item/:id' element={<ItemItself />}/>
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
