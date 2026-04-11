import Button from "../UI/Button";
import handlerActions from "../../util/handlerActions";
import ItemActions from "../UI/itemActions";
import { useSelector } from "react-redux";

export default function MealDetailsActions({ meal }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === meal.id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  const { addItem } = handlerActions();

  return (
    <section className="meal-details-actions" aria-label="Meal actions">
      <div className="meal-details-quantity-group">
        <div className="meal-details-quantity-selector">
          {itemQuantity === 0 && (
            <Button onClick={() => addItem(meal)}>Add to cart</Button>
          )}

          {itemQuantity > 0 && (
            <ItemActions item={meal} itemQuantity={itemQuantity} />
          )}
        </div>
      </div>
    </section>
  );
}
