import MealDetailsActions from "./MealDetailsActions";
import MealDetailsExtraInfo from "./MealDetailsExtraInfo";
import MealDetailsHeader from "./MealDetailsHeader";
import MealDetailsMeta from "./MealDetailsMeta";

export default function MealDetailsInfo({ meal }) {
  return (
    <div className="meal-details-info">
      <MealDetailsHeader
        title={meal.name}
        description={meal.description}
      />
      <MealDetailsMeta price={meal.price} />
      <MealDetailsActions meal={meal} />
      <MealDetailsExtraInfo mealId={meal.id} />
    </div>
  );
}
