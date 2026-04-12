import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { uiActions } from "../store/uiSlice";
import { STORAGE_KEY } from "../util/localStorage";

function getNavigationTarget(targetLocation) {
  if (!targetLocation) {
    return { to: "/" };
  }

  return {
    to: {
      pathname: targetLocation.pathname,
      search: targetLocation.search,
      hash: targetLocation.hash,
    },
    state: targetLocation.state,
  };
}

export default function useAppModalRouting({
  cartModalRef,
  checkoutModalRef,
  successModalRef,
  submitErrorModalRef,
}) {
  const suppressCartCloseRef = useRef(false);
  const suppressCheckoutCloseRef = useRef(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const submitErrorMessage = useSelector((state) => state.ui.isErrorSubmit);
  const backgroundLocation = location.state?.backgroundLocation;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const isCartRoute = location.pathname === "/cart";
    const isCheckoutRoute = location.pathname === "/checkout";

    if (isCartRoute) {
      suppressCartCloseRef.current = false;
      suppressCheckoutCloseRef.current = true;
      checkoutModalRef.current?.close();
      cartModalRef.current?.open();
      return;
    }

    if (isCheckoutRoute) {
      suppressCartCloseRef.current = true;
      suppressCheckoutCloseRef.current = false;
      cartModalRef.current?.close();
      checkoutModalRef.current?.open();
      return;
    }

    suppressCartCloseRef.current = true;
    suppressCheckoutCloseRef.current = true;
    cartModalRef.current?.close();
    checkoutModalRef.current?.close();
  }, [cartModalRef, checkoutModalRef, location.pathname]);

  useEffect(() => {
    const isModalRoute =
      location.pathname === "/cart" || location.pathname === "/checkout";

    if (cartItems.length === 0 && isModalRoute) {
      const fallbackTarget = getNavigationTarget(backgroundLocation);

      navigate(fallbackTarget.to, {
        replace: true,
        state: fallbackTarget.state,
      });
    }
  }, [backgroundLocation, cartItems.length, location.pathname, navigate]);

  function getModalBackgroundLocation() {
    return backgroundLocation || location;
  }

  function navigateToModal(pathname) {
    navigate(pathname, {
      state: { backgroundLocation: getModalBackgroundLocation() },
    });
  }

  function replaceModal(pathname) {
    navigate(pathname, {
      replace: true,
      state: { backgroundLocation: getModalBackgroundLocation() },
    });
  }

  function closeToBackground() {
    const target = getNavigationTarget(backgroundLocation);

    navigate(target.to, {
      replace: true,
      state: target.state,
    });
  }

  function openCart() {
    navigateToModal("/cart");
  }

  function goToCheckout() {
    replaceModal("/checkout");
  }

  function backToCart() {
    replaceModal("/cart");
  }

  function closeCart() {
    if (suppressCartCloseRef.current) {
      suppressCartCloseRef.current = false;
      return;
    }

    closeToBackground();
  }

  function closeCheckout() {
    if (suppressCheckoutCloseRef.current) {
      suppressCheckoutCloseRef.current = false;
      return;
    }

    closeToBackground();
  }

  function handleOrderSuccess() {
    closeToBackground();
    successModalRef.current?.open();
  }

  function closeSuccess() {
    successModalRef.current?.close();
  }

  function showSubmitError(message) {
    dispatch(uiActions.isErrorSubmit(message));
    submitErrorModalRef.current?.open();
  }

  function closeSubmitError() {
    submitErrorModalRef.current?.close();
    closeToBackground();
  }

  return {
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
  };
}
