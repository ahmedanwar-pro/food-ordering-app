import MealItemActions from "../UI/MealItemActions";

export default function MealDetailsActions({ meal }) {
  return (
    <section className="meal-details-actions" aria-label="Meal actions">
      <div className="meal-details-quantity-group">
        <div className="meal-details-quantity-selector">
          <MealItemActions meal={meal} className="meal-item-quantity-value" />
        </div>
      </div>
    </section>
  );
}
