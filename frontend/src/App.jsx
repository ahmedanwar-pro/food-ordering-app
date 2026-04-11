import { useRef } from "react";
import { matchPath, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import AppModals from "./components/App/AppModals";
import useAppModalRouting from "./hooks/useAppModalRouting";
import MealDetailsPage from "./pages/MealDetailsPage";

function App() {
  const cartModalRef = useRef();
  const checkoutModalRef = useRef();
  const successModalRef = useRef();
  const submitErrorModalRef = useRef();
  const location = useLocation();
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
  const isMealDetailsRoute = Boolean(
    matchPath("/meals/:mealId", location.pathname),
  );

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
      {isMealDetailsRoute ? <MealDetailsPage /> : <Meals />}
    </>
  );
}

export default App;
