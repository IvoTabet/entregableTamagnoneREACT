import React from 'react'
import { products } from '../../../products'
import ProductCard from '../../commons/cardProduct/ProductCard'
import './itemList.css'

const ItemsList = ({items}) => {
    return (
        <div className='itemsList'>
            {items.map((products) => (
                <ProductCard key={products.id} prod={products} />
            ))}
        </div>
    )
}

export default ItemsList