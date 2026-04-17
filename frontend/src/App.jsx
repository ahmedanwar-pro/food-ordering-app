import { useRef } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import AppModals from "./components/App/AppModals";
import useAppModalRouting from "./hooks/appRouting";
import routes from "./routes/router";

function App() {
  const cartModalRef = useRef();
  const checkoutModalRef = useRef();
  const successModalRef = useRef();
  const submitErrorModalRef = useRef();
  const mealsErrorModalRef = useRef();

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const isModalRoute =
    location.pathname === "/cart" || location.pathname === "/checkout";
  const pageLocation =
    backgroundLocation ||
    (isModalRoute ? { ...location, pathname: "/" } : location);
  const pageContent = useRoutes(routes, pageLocation);

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
    retryFetchMeals,
    submitErrorMessage,
    mealsErrorMessage,
  } = useAppModalRouting({
    cartModalRef,
    checkoutModalRef,
    successModalRef,
    submitErrorModalRef,
    mealsErrorModalRef,
  });

  return (
    <>
      <AppModals
        cartModalRef={cartModalRef}
        checkoutModalRef={checkoutModalRef}
        successModalRef={successModalRef}
        submitErrorModalRef={submitErrorModalRef}
        mealsErrorModalRef={mealsErrorModalRef}
        submitErrorMessage={submitErrorMessage}
        mealsErrorMessage={mealsErrorMessage}
        onGoToCheckout={goToCheckout}
        onCloseCart={closeCart}
        onBackToCart={backToCart}
        onCloseCheckout={closeCheckout}
        onOrderSuccess={handleOrderSuccess}
        onOrderError={showSubmitError}
        onCloseSuccess={closeSuccess}
        onCloseSubmitError={closeSubmitError}
        retryFetchMeals={retryFetchMeals}
      />

      <Header onOpenCart={openCart} />
      {pageContent}
    </>
  );
}

export default App;
