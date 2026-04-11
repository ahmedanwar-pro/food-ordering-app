import CartModal from "../Cart/CartModal";
import CheckoutModal from "../checkout/CheckoutModal";
import SuccessModal from "../UI/modals/SuccessModal";
import SubmitErrorModal from "../UI/modals/SubmitErrorModal";

export default function AppModals({
  cartModalRef,
  checkoutModalRef,
  successModalRef,
  submitErrorModalRef,
  submitErrorMessage,
  onGoToCheckout,
  onCloseCart,
  onBackToCart,
  onCloseCheckout,
  onOrderSuccess,
  onOrderError,
  onCloseSuccess,
  onCloseSubmitError,
}) {
  return (
    <>
      <CartModal
        modalRef={cartModalRef}
        onGoToCheckout={onGoToCheckout}
        onClose={onCloseCart}
      />

      <CheckoutModal
        modalRef={checkoutModalRef}
        onBackToCart={onBackToCart}
        onClose={onCloseCheckout}
        onSuccess={onOrderSuccess}
        onError={onOrderError}
      />

      <SuccessModal
        modalRef={successModalRef}
        onOkay={onCloseSuccess}
        disableClose
      />

      <SubmitErrorModal
        modalRef={submitErrorModalRef}
        message={submitErrorMessage}
        onClose={onCloseSubmitError}
        disableClose
      />
    </>
  );
}
