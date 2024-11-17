import { Link } from "react-router-dom";
import './cartWidget.css'
const CartWidget = () => {
  return (
    <Link to="/cart" className='cartIcon'>
      <h2 className='cartIcon'>🛒<span className='cartIcon'>0</span></h2>
    </Link>
  );
};

export default CartWidget;