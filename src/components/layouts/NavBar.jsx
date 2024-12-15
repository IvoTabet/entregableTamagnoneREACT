import React from 'react' 
import './navBar.css'
import CartWidget from '../commons/cartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <header className='header'>
      <Link to="/" className='headerTitleCont'>
        <img src="https://res.cloudinary.com/dy0rrjy6n/image/upload/v1734017214/logo_khd3vv.png" alt="logo" className='headerLogo'/>
        <h1 className='headerTitle'>Mercado De Barrio</h1>
      </Link>
      <ul className='categoriesContainer'>
        <Link to="/category/Congelados" className='categoryLink'>Congelados</Link>
        <Link to="/category/Limpieza" className='categoryLink'>Limpieza</Link>
        <Link to="/category/Frutas y Verduras" className='categoryLink'>Frutas y Verduras</Link>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar