import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { uiActions } from "../store/uiSlice";
import { STORAGE_KEY } from "../util/localStorage";

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const isCartRoute = location.pathname === "/cart";
    const isCheckoutRoute = location.pathname === "/checkout";

    if (isCartRoute) {
      suppressCheckoutCloseRef.current = true;
      checkoutModalRef.current.close();
      cartModalRef.current.open();
      return;
    }

    if (isCheckoutRoute) {
      suppressCartCloseRef.current = true;
      cartModalRef.current.close();
      checkoutModalRef.current.open();
      return;
    }

    suppressCartCloseRef.current = true;
    suppressCheckoutCloseRef.current = true;
    cartModalRef.current.close();
    checkoutModalRef.current.close();
  }, [cartModalRef, checkoutModalRef, location.pathname]);

  useEffect(() => {
    if (cartItems.length === 0 && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [cartItems.length, location.pathname, navigate]);

  function openCart() {
    navigate("/cart");
  }

  function goToCheckout() {
    navigate("/checkout");
  }

  function backToCart() {
    navigate("/cart");
  }

  function closeCart() {
    if (suppressCartCloseRef.current) {
      suppressCartCloseRef.current = false;
      return;
    }

    navigate("/");
  }

  function closeCheckout() {
    if (suppressCheckoutCloseRef.current) {
      suppressCheckoutCloseRef.current = false;
      return;
    }

    navigate("/");
  }

  function handleOrderSuccess() {
    navigate("/");
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
    navigate("/");
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
