import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import MealsSearch from "./MealsSearch";
import MealsSkeleton from "../UI/loading/MealsSkeleton";
import { fetchAvaliableMeals } from "../../store/meals/mealsActions";
import { useDispatch, useSelector } from "react-redux";

function matchesSearchTerm(meal, searchTerm) {
  if (!searchTerm) return true;

  return [meal.name, meal.description].some((value) =>
    value.toLowerCase().includes(searchTerm),
  );
}

export default function Meals() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const availableMeals = useSelector(
    (state) => state.availableMeals.availableMeals,
  );

  const loadingMeals = useSelector((state) => state.ui.isLoading);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredMeals = availableMeals.filter((meal) =>
    matchesSearchTerm(meal, normalizedSearchTerm),
  );

  useEffect(() => {
    dispatch(fetchAvaliableMeals());
  }, [dispatch]);

  return (
    <>
      {loadingMeals && <MealsSkeleton count={6} />}
      {!loadingMeals && (
        <section className="meals-section">
          <MealsSearch
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {filteredMeals.length > 1 && (
            <ul id="meals">
              {filteredMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
              ))}
            </ul>
          )}

          {filteredMeals.length === 1 && (
            <ul id="meals">
              {filteredMeals.map((meal) => (
                <>
                  <MealItem key={meal.id} meal={meal} />
                  <div className="empty-meal"></div>
                </>
              ))}
            </ul>
          )}

          {filteredMeals.length === 0 && (
            <div className="meals-empty-state">
              <h2>No meals found</h2>
              <p>Try a different name or description.</p>
            </div>
          )}
        </section>
      )}
    </>
  );
}
