import { postData } from "../../util/api";
import { cartActions } from "../cart/cartSlice";
import { checkoutFormActions } from "../checkoutForm/checkoutFormSlice";
import { uiActions } from "../ui/uiSlice";
import buildOrder from "../../util/buildOrder";

export function submitOrder(event, onSuccess, onError) {
  return async (dispatch, getState) => {
    event.preventDefault();
    dispatch(uiActions.isLoading(true));
    try {
      const state = getState();
      const cartItems = state.cart.items;
      const form = state.checkoutForm;
      const order = buildOrder({ cartItems, form });
      await postData(order, "http://localhost:3000/orders");
      dispatch(cartActions.clearCart());
      dispatch(checkoutFormActions.resetForm());
      onSuccess();
    } catch (err) {
      onError(err.message);
    } finally {
      dispatch(uiActions.isLoading(""));
    }
  };
}
