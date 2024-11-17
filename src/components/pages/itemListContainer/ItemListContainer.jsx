import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {products} from '../../../products'
import {useParams} from 'react-router-dom'
import ItemsList from './ItemsList'

const ItemListContainer = () => {
    const [myItems, setMyItems] = useState([])
    const {name} = useParams()

    useEffect(()=>{
        let itemFiltered = products.filter((elm)=>elm.category === name)
        let task = new Promise((res)=>{
            res(name ? itemFiltered : products)
        })
        task.then((res)=>{
            setMyItems(res)
        })
        .catch((err)=>console.log(err))
        },[name])

    return (
        <ItemsList items = {myItems} />
    )
}

export default ItemListContainer