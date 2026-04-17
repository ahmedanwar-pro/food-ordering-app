import { useEffect, useRef } from "react";

import { CHECKOUT_ROUTE } from "../shared/modalRoutingUtils";

export default function useCheckoutModalRouting({
  cartModalRef,
  checkoutModalRef,
  location,
  replaceModal,
  closeToBackground,
}) {
  const suppressCheckoutCloseRef = useRef(false);

  useEffect(() => {
    const isCheckoutRoute = location.pathname === CHECKOUT_ROUTE;

    if (isCheckoutRoute) {
      suppressCheckoutCloseRef.current = false;
      cartModalRef.current?.close();
      checkoutModalRef.current?.open();
      return;
    }

    suppressCheckoutCloseRef.current = true;
    checkoutModalRef.current?.close();
  }, [cartModalRef, checkoutModalRef, location.pathname]);

  function goToCheckout() {
    replaceModal(CHECKOUT_ROUTE);
  }

  function closeCheckout() {
    if (suppressCheckoutCloseRef.current) {
      suppressCheckoutCloseRef.current = false;
      return;
    }

    closeToBackground();
  }

  return {
    goToCheckout,
    closeCheckout,
  };
}

