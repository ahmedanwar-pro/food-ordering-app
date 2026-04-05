import { postData } from "../util/http";
import { cartActions } from "./cartSlice";
import { formActions } from "./formSlice";
import { uiActions } from "./uiSlice";
import buildOrder from "../util/buildOrder";

export function submitOrder(event, onSuccess, onError) {
  return async (dispatch, getState) => {
    event.preventDefault();
    dispatch(uiActions.isLoading(true));
    try {
      const state = getState();
      const cartItems = state.cart.items;
      const form = state.form;
      const order = buildOrder({ cartItems, form });
      await postData(order, "http://localhost:3000/orders");
      dispatch(cartActions.clearCart());
      dispatch(formActions.resetForm());
      onSuccess();
    } catch (err) {
      onError(err.message);
    } finally {
      dispatch(uiActions.isLoading(""));
    }
  };
}
