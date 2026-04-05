import { currencyFormatter } from "../../util/Formatting";
import Modal from "../UI/modals/Modal";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "../../store/orderActions";
import { CheckoutFormFields } from "./CheckoutFormFields";
import ChekoutActions from "./CheckoutActions";

export default function CheckoutModal({
  modalRef,
  onBackToCart,
  onSuccess,
  onError,
}) {
  const dispatch = useDispatch();
  const isSubmitting = useSelector((state) => state.ui.isLoading);
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  async function handleSubmit(event) {
    dispatch(submitOrder(event, onSuccess, onError));
  }

  return (
    <Modal ref={modalRef} disableClose={isSubmitting}>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

      <form onSubmit={handleSubmit}>
        <CheckoutFormFields />
        <ChekoutActions
          onBackToCart={onBackToCart}
          isSubmitting={isSubmitting}
        />
      </form>
    </Modal>
  );
}
