import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './itemItself.css'
import { CartContext } from '../../../contexts/CartContext'
import { dataBase } from '../../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

const ItemItself = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})
    const [count, setCount] = useState(1)

    const {addCart} = useContext(CartContext)

    useEffect(()=>{
        let productsCollection = collection(dataBase, "products")
        let refDoc = doc(productsCollection, id)
        const getItem = getDoc(refDoc)
        getItem.then((res)=>{
            setItem({...res.data(), id: res.id})            
        })
        
    },[id])
    

    if(!item){
        return <h2>No se encontró el producto</h2>
    }

    const handleIncrement = () => {
        if (count < item.stock) {
        setCount(count + 1)
        }else{
            alert("No hay más unidades disponibles de este producto")
        }
    }
    
    const handleDecrement = () => {
        if (count > 1) {
        setCount(count - 1)
        } else {
        alert("Minimo 1 unidad requerida")
        }
    }
    
    const onAdd = () => {
        let productToCart = { ...item, quant: count }
        addCart(productToCart)
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
        <div className='addCartBTNCont'>
            <button className='addCartBTN' onClick={onAdd}>Agregar al carrito</button>
            <button className='addCartBTN' onClick={handleDecrement}>-</button>
            <h3>{count}</h3>
            <button className='addCartBTN' onClick={handleIncrement}>+</button>
        </div>
    </div>
  )
}

export default ItemItself