import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer'
import Footer from './components/layouts/Footer'
import Cart from './components/pages/cart/Cart'
import ItemItself from './components/pages/itemItself/ItemItself'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:name' element={<ItemListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/item/:id' element={<ItemItself />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
