import CartModal from "../Cart/CartModal";
import CheckoutModal from "../checkout/CheckoutModal";
import SuccessModal from "../UI/modals/SuccessModal";
import SubmitErrorModal from "../UI/modals/SubmitErrorModal";
import MealsErrorModal from "../UI/modals/MealsErrorModal";

export default function AppModals({
  cartModalRef,
  checkoutModalRef,
  successModalRef,
  submitErrorModalRef,
  mealsErrorModalRef,
  submitErrorMessage,
  mealsErrorMessage,
  onGoToCheckout,
  onCloseCart,
  onBackToCart,
  onCloseCheckout,
  onOrderSuccess,
  onOrderError,
  onCloseSuccess,
  onCloseSubmitError,
  retryFetchMeals,
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

      <MealsErrorModal
        modalRef={mealsErrorModalRef}
        message={mealsErrorMessage}
        onRetry={retryFetchMeals}
        disableClose
      />
    </>
  );
}
