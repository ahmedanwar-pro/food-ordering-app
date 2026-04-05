import ItemActions from "../UI/itemActions";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../util/Formatting";

export default function CartItems() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.length > 0 && (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity} x
                {currencyFormatter.format(item.price)}
              </p>
              <ItemActions item={item} />
            </li>
          ))}
        </ul>
      )}

      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
    </>
  );
}
