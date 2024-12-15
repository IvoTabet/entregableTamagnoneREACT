import { Link } from "react-router-dom";
import './cart.css'
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

const Cart = () => {
  const {cart, resetCart, removeItem, getTotal} = useContext(CartContext)
  
  let totalAmount = getTotal();

  return (
    <div className="cartContainer">
      {cart.length > 0 ? (cart.map((elem) => {
            return (
              <div key={elem.id} className="cartCardItem" >
                <h3>{elem.name}</h3>
                <h4>cantidad: {elem.quant}</h4>
                <h4>precio: {elem.price*elem.quant}</h4>
                <button onClick={() => removeItem(elem.id)} className="btnEliminicarCart">Eliminar</button>
              </div>
            );
          })
        ) : (
          <h2>El carrito está vacío</h2>
        )}

      {cart.length > 0 && (
        <div className="goToCheckout">
          <h3>Total: ${totalAmount}</h3>
          <button onClick={resetCart} className="cartLink">Limpiar todo el carrito</button>
          <Link to="/" className="cartLink">Volver al inicio</Link>
          <Link to="/checkout" className="cartLink">Finalizar compra</Link>
          
        </div>
      )}
    </div>
  );

};

export default Cart;