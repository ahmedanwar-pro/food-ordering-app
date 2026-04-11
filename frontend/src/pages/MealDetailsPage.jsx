import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MealDetailsLayout from "../components/MealDetails/MealDetailsLayout";
import MealDetailsImage from "../components/MealDetails/MealDetailsImage";
import MealDetailsInfo from "../components/MealDetails/MealDetailsInfo";
import { fetchAvaliableMeals } from "../store/meals/mealsActions";

export default function MealDetailsPage() {
  const { mealId } = useParams();
  const dispatch = useDispatch();

  const availableMeals = useSelector(
    (state) => state.availableMeals.availableMeals,
  );
  const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    if (availableMeals.length === 0) {
      dispatch(fetchAvaliableMeals());
    }
  }, [availableMeals.length, dispatch]);

  const meal = availableMeals.find((item) => String(item.id) === mealId);

  if (isLoading && !meal) {
    return (
      <main className="meal-details-page">
        <section className="meal-details-state center">
          <h2>Loading meal details...</h2>
        </section>
      </main>
    );
  }

  if (!meal) {
    return (
      <main className="meal-details-page">
        <section className="meal-details-state center">
          <h2>Meal not found</h2>
          <p>The meal you are looking for is not available.</p>
          <Link to="/" className="meal-details-back-link">
            Back to Meals
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="meal-details-page">
      <MealDetailsLayout
        image={<MealDetailsImage meal={meal} />}
        info={<MealDetailsInfo meal={meal} />}
      />
    </main>
  );
}
