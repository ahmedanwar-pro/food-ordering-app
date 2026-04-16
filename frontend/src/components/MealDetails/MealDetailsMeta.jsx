import { currencyFormatter } from "../../util/currencyFormatter";

export default function MealDetailsMeta({ price }) {
  return (
    <div className="meal-details-meta">
      <p className="meal-details-price">{currencyFormatter.format(price)}</p>
    </div>
  );
}
