import handlerActions from "../../util/handlerActions";
import Button from "./Button";
import TrashIcon from "./icons/TrashIcon";
import { useSelector } from "react-redux";

export default function MealItemActions({ meal, className }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === meal.id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  const { addItem, removeItem, removeItemCompletly } = handlerActions();
  const { id, name, quantity } = meal;

  return (
    <div className="meal-item-actions">
      {itemQuantity === 0 && (
        <Button onClick={() => addItem(meal)}>Add to cart</Button>
      )}

      {itemQuantity > 0 && (
        <div className="quantity-controls">
          <Button
            className="remove-item-btn"
            textOnly
            onClick={() => removeItemCompletly(id)}
            aria-label={`Remove ${name}`}
            title="Remove item"
          >
            <TrashIcon size={20} />
          </Button>

          <Button onClick={() => removeItem(id)}>-</Button>

          <span
            className={`${itemQuantity ? "quantity-value" : ""} ${className ?? ""}`}
          >
            {itemQuantity ?? quantity}
          </span>

          <Button onClick={() => addItem(meal)}>+</Button>
        </div>
      )}
    </div>
  );
}
