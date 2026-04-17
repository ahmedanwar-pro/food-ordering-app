import CartModal from "../Cart/CartModal";
import CheckoutModal from "../checkout/CheckoutModal";
import SubmitSuccessModal from "../UI/modals/SubmitSuccessModal";
import SubmitErrorModal from "../UI/modals/SubmitErrorModal";
import MealsErrorModal from "../UI/modals/MealsErrorModal";

export default function AppModals({
  refs: {
    cartModalRef,
    checkoutModalRef,
    submitSuccessModalRef,
    submitErrorModalRef,
    mealsErrorModalRef,
  },
  checkoutActions: {
    backToCart,
    closeCheckout,
    handleOrderSuccess,
    showSubmitError,
  },
  cartActions: { goToCheckout, closeCart },
  submitSuccessActions: { closeSuccess },
  submitErrorActions: { closeSubmitError, submitErrorMessage },
  mealsErrorActions: { retryFetchMeals, mealsErrorMessage },
}) {
  return (
    <>
      <CartModal
        modalRef={cartModalRef}
        onGoToCheckout={goToCheckout}
        onClose={closeCart}
      />

      <CheckoutModal
        modalRef={checkoutModalRef}
        onBackToCart={backToCart}
        onClose={closeCheckout}
        onSuccess={handleOrderSuccess}
        onError={showSubmitError}
      />

      <SubmitSuccessModal
        modalRef={submitSuccessModalRef}
        onOkay={closeSuccess}
        disableClose
      />

      <SubmitErrorModal
        modalRef={submitErrorModalRef}
        message={submitErrorMessage}
        onClose={closeSubmitError}
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
