import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import './checkout.css'
import { CartContext } from "../../../contexts/CartContext";
import { dataBase } from '../../../firebase'
import { collection, addDoc, updateDoc, doc} from 'firebase/firestore'

const Checkout = () => {
    const [userData, setUserData] = useState({
        nombre: "",
        userEmail: "",
        telefono: "",
    });
    const {cart, getTotal, resetCart} = useContext(CartContext)
    const capturarDatos = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };


    const [orderID, setOrderID] = useState(null)
    const funcionDelFormulario = (e) => {
        e.preventDefault();
        let total = getTotal()
        let order = {
            buyer: userData,
            items: cart,
            total
        }
        
        const orderCollection = collection(dataBase, "orders")
        addDoc(orderCollection, order).then((res) => {
            setOrderID(res.id);
            resetCart();
        })

        const productsCollection = collection(dataBase, "products")
        order.items.forEach(elem=>{
            let refDoc = doc(productsCollection, elem.id)
            updateDoc(refDoc, {stock: elem.stock - elem.quant})
        })
    };

    return (
        <div className="formContainer">
            {orderID ? (
                <h2>Gracias por comprar en nuestro mercado! Su orden de compra es {orderID}</h2>
            ):(
                    <form onSubmit={funcionDelFormulario} className="checkoutForm">
                        <h2>Ingrese sus datos para finalizar la compra:</h2>
                        <input type="text" placeholder="nombre" name="nombre" onChange={capturarDatos} className="textForm"/>
                        <input type="email" required={true} placeholder="email" name="userEmail" onChange={capturarDatos} className="textForm"/>
                        <input type="text" required={true} placeholder="telefono" name="telefono" onChange={capturarDatos} className="textForm"/>
                        <button className="btnForm">ENVIAR</button>
                        <Link to='/cart' className="linkForm">CANCELAR</Link> 
                    </form>
            )}
            
        </div>
    );
};

export default Checkout;