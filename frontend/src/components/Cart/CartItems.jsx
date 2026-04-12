import MealItemActions from "../UI/MealItemActions";
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

      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} x
              {currencyFormatter.format(item.price)}
            </p>
            <MealItemActions meal={item} className="cart-item-quantity-value" />
          </li>
        ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
    </>
  );
}
