import { useRef, useEffect } from "react";
import Header from "./components/Layout/Header";
import CartModal from "./components/Cart/CartModal";
import CheckoutModal from "./components/checkout/CheckoutModal";
import Meals from "./components/Meals/Meals";
import SuccessModal from "./components/UI/modals/SuccessModal";
import SubmitErrorModal from "./components/UI/modals/SubmitErrorModal";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";
import { STORAGE_KEY } from "./util/localStorage";

function App() {
  const cartModalRef = useRef();
  const checkoutModalRef = useRef();
  const successModalRef = useRef();
  const submitErrorModalRef = useRef();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const submitErrorMessage = useSelector((state) => state.ui.isErrorSubmit);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  function openCart() {
    cartModalRef.current.open();
  }

  function goToCheckout() {
    cartModalRef.current.close();
    checkoutModalRef.current.open();
  }

  function backToCart() {
    checkoutModalRef.current.close();
    cartModalRef.current.open();
  }

  function CloseCart() {
    cartModalRef.current.close();
  }

  function handleOrderSuccess() {
    checkoutModalRef.current.close();
    successModalRef.current.open();
  }

  function closeSuccess() {
    successModalRef.current.close();
  }

  function showSubmitError(message) {
    dispatch(uiActions.isErrorSubmit(message));
    submitErrorModalRef.current.open();
  }

  function closeSubmitError() {
    submitErrorModalRef.current.close();
    checkoutModalRef.current.close();
  }

  return (
    <>
      <CartModal
        modalRef={cartModalRef}
        onGoToCheckout={goToCheckout}
        onClose={CloseCart}
      />

      <CheckoutModal
        modalRef={checkoutModalRef}
        onBackToCart={backToCart}
        onSuccess={handleOrderSuccess}
        onError={showSubmitError}
      />

      <SuccessModal
        modalRef={successModalRef}
        onOkay={closeSuccess}
        disableClose
      />

      <SubmitErrorModal
        modalRef={submitErrorModalRef}
        message={submitErrorMessage}
        onClose={closeSubmitError}
        disableClose
      />

      <Header onOpenCart={openCart} />
      <Meals />
    </>
  );
}

export default App;
