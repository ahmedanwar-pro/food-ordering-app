import { Link } from "react-router-dom";
import { currencyFormatter } from "../../util/Formatting";
import MealItemActions from "../UI/MealItemActions";

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <Link to={`/meals/${meal.id}`} className="meal-item-link">
          <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">
              {currencyFormatter.format(meal.price)}
            </p>
            <p className="meal-item-description">{meal.description}</p>
          </div>
        </Link>
        <MealItemActions meal={meal} className="meal-item-quantity-value" />
      </article>
    </li>
  );
}
