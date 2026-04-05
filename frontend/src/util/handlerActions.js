import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { formActions } from "../store/formSlice";

export default function handlerActions() {
  const dispatch = useDispatch();

  function removeItemCompletly(id) {
    dispatch(cartActions.removeItemCompletely(id));
  }

  function removeItem(id) {
    dispatch(cartActions.removeItem(id));
  }

  function addItem(item) {
    dispatch(cartActions.addItem(item));
  }

  function clearCart() {
    dispatch(cartActions.clearCart());
  }

  function onChangeFormCheckout(event) {
    const { name, value } = event.target;
    dispatch(formActions.handleFormOnChange({ name, value }));
  }

  return {
    addItem,
    removeItem,
    removeItemCompletly,
    clearCart,
    onChangeFormCheckout,
  };
}
