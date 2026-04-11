import Modal from "../UI/modals/Modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CartItems from "./CartItems";
import CartActions from "./CartActions";

export default function CartModal({ modalRef, onGoToCheckout, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (cartItems.length === 0) {
      modalRef.current.close();
    }
  }, [cartItems]);

  return (
    <Modal ref={modalRef} onClose={onClose}>
      <CartItems />
      <CartActions onClose={onClose} onGoToCheckout={onGoToCheckout} />
    </Modal>
  );
}
