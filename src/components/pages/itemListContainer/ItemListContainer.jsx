import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemsList from './ItemsList'
import { dataBase } from '../../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [myItems, setMyItems] = useState([])
    const {name} = useParams()
    useEffect(()=>{
        const productsCollection = collection(dataBase, "products")
        let refCollection = productsCollection
        if(name){
            const prodsCollectionFilter = query(productsCollection, where("category", "==", name))
            refCollection = prodsCollectionFilter
        }

        const getProds =  getDocs(refCollection)
        getProds.then((res)=>{            
            let product = res.docs.map((elem)=>{
                return{...elem.data(), id: elem.id}
            })
            setMyItems(product)
        })
    
        /*let itemFiltered = myItems.filter((elm)=>elm.category === name)
        let task = new Promise((res)=>{
            res(name ? itemFiltered : myItems)
        })
        task.then((res)=>{
            setMyItems(res)
        })
        .catch((err)=>console.log(err))*/
    },[name])

       
    return (
        <ItemsList items = {myItems} />
    )
}

export default ItemListContainer