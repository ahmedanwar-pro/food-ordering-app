import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAvaliableMeals } from "../../../store/meals/mealsActions";

export default function useMealsErrorModalRouting({ mealsErrorModalRef }) {
  const dispatch = useDispatch();
  const mealsErrorMessage = useSelector((state) => state.ui.isError);

  useEffect(() => {
    if (!mealsErrorMessage) {
      mealsErrorModalRef.current?.close();
    } else {
      mealsErrorModalRef.current?.open();
    }
  }, [mealsErrorMessage]);

  function retryFetchMeals() {
    mealsErrorModalRef.current?.close();
    dispatch(fetchAvaliableMeals());
  }

  return {
    retryFetchMeals,
    mealsErrorMessage,
  };
}

