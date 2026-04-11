import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MealDetailsExtraInfo({ mealId }) {
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === mealId),
  );

  return (
    <footer className="meal-details-extra-info">
      <p>
        In cart: <strong>{cartItem?.quantity ?? 0}</strong>
      </p>
      <Link to="/" className="meal-details-back-link">
        Back to Meals
      </Link>
    </footer>
  );
}
