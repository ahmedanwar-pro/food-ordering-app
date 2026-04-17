export const CART_ROUTE = "/cart";
export const CHECKOUT_ROUTE = "/checkout";

export function getNavigationTarget(targetLocation) {
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

export function isModalRoute(pathname) {
  return pathname === CART_ROUTE || pathname === CHECKOUT_ROUTE;
}

