import ItemActions from "../UI/itemActions";
import handlerActions from "../../util/handlerActions";
import Button from "../UI/Button";
import { useSelector } from "react-redux";

export default function MealItemActions({ meal }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === meal.id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  const { addItem } = handlerActions();

  return (
    <div className="meal-item-actions">
      {itemQuantity === 0 && (
        <Button onClick={() => addItem(meal)}>Add to cart</Button>
      )}

      {itemQuantity > 0 && (
        <ItemActions item={meal} itemQuantity={itemQuantity} />
      )}
    </div>
  );
}
