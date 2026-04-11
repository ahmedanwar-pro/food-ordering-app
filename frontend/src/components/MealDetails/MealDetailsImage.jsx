export default function MealDetailsImage({ meal }) {
  return (
    <figure className="meal-details-image">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
    </figure>
  );
}
