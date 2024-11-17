import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { products } from '../../../products'
import './itemItself.css'

const ItemItself = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(()=>{
        let itemSelected = products.find((elem)=>elem.id === +id)
        if(itemSelected){
            setItem(itemSelected)
        }
    },[id])
    

    if(!item){
        return <h2>No se encontró el producto</h2>
    }

    return (
    <div className='itemContainer'>
        <h2 className='itemName'>{item.name}</h2>
        <img src={item.img} alt={item.name} className='itemImg'/>
        <div className='itemDescriptionContainer'>
            <p className='itemDescription'>{item.description}</p>
            <p className='itemPrice'>${item.price}</p>
        </div>
        <Link to='/' className='itemLink'>Volver al inicio</Link>
        <button className='addCartBTN'>Agregar al carrito</button>
    </div>
  )
}

export default ItemItself