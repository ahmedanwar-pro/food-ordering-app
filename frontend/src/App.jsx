import { useRef } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import AppModals from "./components/App/AppModals";
import useAppModalRouting from "./hooks/appRouting";
import { usePageContentLocation } from "./hooks/appRouting/shared";
import routes from "./routes/router";

function App() {
  const cartModalRef = useRef();
  const checkoutModalRef = useRef();
  const submitSuccessModalRef = useRef();
  const submitErrorModalRef = useRef();
  const mealsErrorModalRef = useRef();

  const pageContent = usePageContentLocation(routes);

  const {
    checkoutActions: {
      backToCart,
      closeCheckout,
      handleOrderSuccess,
      showSubmitError,
    },
    cartActions: { goToCheckout, closeCart, openCart },
    submitSuccessActions: { closeSuccess },
    submitErrorActions: { closeSubmitError, submitErrorMessage },
    mealsErrorActions: { retryFetchMeals, mealsErrorMessage },
  } = useAppModalRouting({
    cartModalRef,
    checkoutModalRef,
    submitSuccessModalRef,
    submitErrorModalRef,
    mealsErrorModalRef,
  });

  return (
    <>
      <AppModals
        refs={{
          cartModalRef,
          checkoutModalRef,
          submitSuccessModalRef,
          submitErrorModalRef,
          mealsErrorModalRef,
        }}
        checkoutActions={{
          backToCart,
          closeCheckout,
          handleOrderSuccess,
          showSubmitError,
        }}
        cartActions={{
          goToCheckout,
          closeCart,
        }}
        submitSuccessActions={{
          closeSuccess,
        }}
        submitErrorActions={{
          closeSubmitError,
          submitErrorMessage,
        }}
        mealsErrorActions={{
          retryFetchMeals,
          mealsErrorMessage,
        }}
      />

      <Header onOpenCart={openCart} />
      {pageContent}
    </>
  );
}

export default App;
