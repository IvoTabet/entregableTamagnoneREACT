import { Link } from "react-router-dom";
import './cartWidget.css'
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <Link to="/cart" className='cartIcon'>
      <h2 className='cartIcon'>🛒<span className='cartIcon'>{cart.length}</span></h2>
    </Link>
  );
};

export default CartWidget;