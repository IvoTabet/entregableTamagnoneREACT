import React from 'react'
import { Link } from 'react-router-dom'
import './productCard.css'

const ProductCard = ({prod}) => {
  return (
    <div className='productCard'>
        <h3 className='productName'>{prod.name}</h3>
        <img src={prod.img} alt={prod.name} className='productImg'/>
        <p className='productPrice'>${prod.price}</p>
        <Link to={`/item/${prod.id}`} className='productLink'>Ver detalle</Link>
    </div>
  )
}

export default ProductCard