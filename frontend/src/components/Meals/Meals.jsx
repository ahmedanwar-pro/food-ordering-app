import { useEffect, useRef } from "react";
import MealItem from "./MealItem";
import MealsErrorModal from "../UI/modals/MealsErrorModal";
import MealsSkeleton from "../UI/loading/MealsSkeleton";
import { fetchAvaliableMeals } from "../../store/meals/mealsActions";
import { useDispatch, useSelector } from "react-redux";

export default function Meals() {
  const errorModalRef = useRef();
  const dispatch = useDispatch();

  const availableMeals = useSelector(
    (state) => state.availableMeals.availableMeals,
  );

  const loadingMeals = useSelector((state) => state.ui.isLoading);
  const errorMessage = useSelector((state) => state.ui.isError);

  useEffect(() => {
    if (!errorMessage) {
      errorModalRef.current?.close();
    } else {
      errorModalRef.current?.open();
    }
  }, [errorMessage]);

  useEffect(() => {
    dispatch(fetchAvaliableMeals());
  }, [dispatch]);

  function retry() {
    errorModalRef.current?.close();
    dispatch(fetchAvaliableMeals());
  }

  return (
    <>
      <MealsErrorModal
        modalRef={errorModalRef}
        message={errorMessage}
        onRetry={retry}
        disableClose
      />

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
