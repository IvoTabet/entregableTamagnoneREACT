import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addCart = (product)=>{
        if(cart.some((elem)=>elem.id ===product.id)){
            setCart([...cart])
        }else{
            setCart([...cart, product])
        }
        
    }

    const resetCart = ()=>{
        setCart([])
    }

    const removeItem = (id)=>{
        let filteredArray = cart.filter((elem)=>elem.id !== id)
        setCart(filteredArray)
    }

    const getTotal = ()=>{
        let total = cart.reduce((total, elem)=>{
            return total + elem.price*elem.quant
        }, 0)    
        return total        
    }

    return <CartContext.Provider value={{ cart, addCart, resetCart, removeItem, getTotal }}>{children}</CartContext.Provider>
}