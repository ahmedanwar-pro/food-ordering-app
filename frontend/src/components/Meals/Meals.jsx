import { useEffect, useRef } from "react";
import MealItem from "./MealItem";
import MealsErrorModal from "../UI/modals/MealsErrorModal";
import MealsSkeleton from "../UI/loading/MealsSkeleton";
import { fetchAvaliableMeals } from "../../store/meals/mealsActions";
import { useDispatch, useSelector } from "react-redux";

export default function Meals() {
  const dispatch = useDispatch();

  const availableMeals = useSelector(
    (state) => state.availableMeals.availableMeals,
  );

  const loadingMeals = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    dispatch(fetchAvaliableMeals());
  }, [dispatch]);

  return (
    <>
      {loadingMeals && <MealsSkeleton count={6} />}
      {!loadingMeals && (
        <ul id="meals">
          {availableMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </>
  );
}
