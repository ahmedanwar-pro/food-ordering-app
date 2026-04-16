import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cartSlice";

export default function useCartItemActions() {
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

  return {
    addItem,
    removeItem,
    removeItemCompletly,
    clearCart,
  };
}
