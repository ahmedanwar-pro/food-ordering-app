import { useSelector } from "react-redux";
import {
  useCartModalRouting,
  useCheckoutModalRouting,
  useMealsErrorModalRouting,
  useOrderSuccessModalRouting,
  useSubmitErrorModalRouting,
} from "./modals";
import { useModalNavigation, usePersistCartStorage } from "./shared";

export default function useAppModalRouting({
  cartModalRef,
  checkoutModalRef,
  submitSuccessModalRef,
  submitErrorModalRef,
  mealsErrorModalRef,
}) {
  const {
    location,
    backgroundLocation,
    navigate,
    navigateToModal,
    replaceModal,
    closeToBackground,
  } = useModalNavigation();
  const cartItems = useSelector((state) => state.cart.items);
  usePersistCartStorage(cartItems);

  const { openCart, backToCart, closeCart } = useCartModalRouting({
    cartItemsCount: cartItems.length,
    cartModalRef,
    checkoutModalRef,
    location,
    backgroundLocation,
    navigate,
    navigateToModal,
    replaceModal,
    closeToBackground,
  });

  const { goToCheckout, closeCheckout } = useCheckoutModalRouting({
    cartModalRef,
    checkoutModalRef,
    location,
    replaceModal,
    closeToBackground,
  });

  const { handleOrderSuccess, closeSuccess } = useOrderSuccessModalRouting({
    submitSuccessModalRef,
    closeToBackground,
  });

  const { showSubmitError, closeSubmitError, submitErrorMessage } =
    useSubmitErrorModalRouting({
      submitErrorModalRef,
      closeToBackground,
    });

  const { retryFetchMeals, mealsErrorMessage } = useMealsErrorModalRouting({
    mealsErrorModalRef,
  });

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
    retryFetchMeals,
    submitErrorMessage,
    mealsErrorMessage,
  };
}
