import { useRef } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import AppModals from "./components/App/AppModals";
import useAppModalRouting from "./hooks/useAppModalRouting";

function App() {
  const cartModalRef = useRef();
  const checkoutModalRef = useRef();
  const successModalRef = useRef();
  const submitErrorModalRef = useRef();
  const {
    openCart,
    goToCheckout,
    backToCart,
    closeCart,
    closeCheckout,
    handleOrderSuccess,
    closeSuccess,
    showSubmitError,
    closeSubmitError,
    submitErrorMessage,
  } = useAppModalRouting({
    cartModalRef,
    checkoutModalRef,
    successModalRef,
    submitErrorModalRef,
  });

  return (
    <>
      <AppModals
        cartModalRef={cartModalRef}
        checkoutModalRef={checkoutModalRef}
        successModalRef={successModalRef}
        submitErrorModalRef={submitErrorModalRef}
        submitErrorMessage={submitErrorMessage}
        onGoToCheckout={goToCheckout}
        onCloseCart={closeCart}
        onBackToCart={backToCart}
        onCloseCheckout={closeCheckout}
        onOrderSuccess={handleOrderSuccess}
        onOrderError={showSubmitError}
        onCloseSuccess={closeSuccess}
        onCloseSubmitError={closeSubmitError}
      />

      <Header onOpenCart={openCart} />
      <Meals />
    </>
  );
}

export default App;
