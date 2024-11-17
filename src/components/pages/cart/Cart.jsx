import { Link } from "react-router-dom";
import './cart.css'
const Cart = () => {
  return (
    <div className="cartContainer">
      <h2 className="cartTitle">pagina carrito</h2>
      <Link to="/" className="cartLink">Volver al inicio</Link>
    </div>
  );
};

export default Cart;