import { uiActions } from "../ui/uiSlice";
import { availableMealsActions } from "./mealsSlice";
import { getData } from "../../util/api";

export function fetchAvaliableMeals() {
  return async (dispatch) => {
    dispatch(uiActions.isLoading(true));
    dispatch(uiActions.isError(""));

    try {
      const meals = await getData("http://localhost:3000/meals");
      dispatch(availableMealsActions.getAvailableMeals(meals));
    } catch (err) {
      dispatch(uiActions.isError(err.message));
    } finally {
      dispatch(uiActions.isLoading(""));
    }
  };
}
