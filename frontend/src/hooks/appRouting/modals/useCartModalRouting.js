import { useEffect, useRef } from "react";

import {
  CART_ROUTE,
  getNavigationTarget,
  isModalRoute,
} from "../shared/modalRoutingUtils";

export default function useCartModalRouting({
  cartItemsCount,
  cartModalRef,
  checkoutModalRef,
  location,
  backgroundLocation,
  navigate,
  navigateToModal,
  replaceModal,
  closeToBackground,
}) {
  const suppressCartCloseRef = useRef(false);

  useEffect(() => {
    const isCartRoute = location.pathname === CART_ROUTE;

    if (isCartRoute) {
      suppressCartCloseRef.current = false;
      checkoutModalRef.current?.close();
      cartModalRef.current?.open();
      return;
    }

    suppressCartCloseRef.current = true;
    cartModalRef.current?.close();
  }, [cartModalRef, checkoutModalRef, location.pathname]);

  useEffect(() => {
    if (cartItemsCount === 0 && isModalRoute(location.pathname)) {
      const fallbackTarget = getNavigationTarget(backgroundLocation);

      navigate(fallbackTarget.to, {
        replace: true,
        state: fallbackTarget.state,
      });
    }
  }, [backgroundLocation, cartItemsCount, location.pathname, navigate]);

  function openCart() {
    navigateToModal(CART_ROUTE);
  }

  function backToCart() {
    replaceModal(CART_ROUTE);
  }

  function closeCart() {
    if (suppressCartCloseRef.current) {
      suppressCartCloseRef.current = false;
      return;
    }

    closeToBackground();
  }

  return {
    openCart,
    backToCart,
    closeCart,
  };
}

