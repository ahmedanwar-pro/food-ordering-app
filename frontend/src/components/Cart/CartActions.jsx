import { useSelector } from "react-redux";
import Button from "../UI/Button";
import useCartItemActions from "../../hooks/cart/useCartItemActions";

export default function CartActions({ onClose, onGoToCheckout }) {
  const cartItems = useSelector((state) => state.cart.items);
  const { clearCart } = useCartItemActions();

  return (
    <>
      <div className="modal-actions">
        {cartItems.length > 0 && (
          <>
            <Button
              textOnly
              onClick={() => {
                clearCart();
                onClose();
              }}
            >
              Clear
            </Button>

            <Button textOnly onClick={onClose}>
              Back
            </Button>

            <Button onClick={onGoToCheckout}>Go to Checkout</Button>
          </>
        )}
      </div>
    </>
  );
}
