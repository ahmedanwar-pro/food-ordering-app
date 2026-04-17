import { useEffect } from "react";

import { STORAGE_KEY } from "../../../util/cartStorage";

export default function usePersistCartStorage(cartItems) {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);
}

