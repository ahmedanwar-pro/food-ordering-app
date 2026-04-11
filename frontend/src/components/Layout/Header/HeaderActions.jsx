import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/UI/Button";
import CartIcon from "../../UI/icons/CartIcon";

export default function HeaderActions({ onOpenCart }) {
  const cartItems = useSelector((state) => state.cart.items);
  const uniqueCount = cartItems.length;
  const prevCountRef = useRef(uniqueCount);

  const [isBumping, setIsBumping] = useState(false);

  //   Trigger bump animation when cart item count increase.
  useEffect(() => {
    if (prevCountRef.current === 0 && uniqueCount === 0) return;
    if (uniqueCount > prevCountRef.current) {
      setIsBumping(true);
      const timer = setTimeout(() => setIsBumping(false), 300);
      return () => clearTimeout(timer);
    }
    prevCountRef.current = uniqueCount;
  }, [uniqueCount]);

  //   Store the current cart count to compare it on the next render.
  useEffect(() => {
    prevCountRef.current = uniqueCount;
  }, [uniqueCount]);

  return (
    <Button textOnly onClick={onOpenCart} className="cart-button">
      <span className={`cart-icon-wrapper ${isBumping ? "bump" : ""}`}>
        <CartIcon />
        {uniqueCount > 0 && <span className="cart-badge">{uniqueCount}</span>}
      </span>
      Cart
    </Button>
  );
}
