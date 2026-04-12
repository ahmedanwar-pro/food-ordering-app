import logoImg from "../../../assets/logo.jpg";
import HeaderActions from "./HeaderActions";
import { Link } from "react-router-dom";

export default function Header({ onOpenCart }) {
  return (
    <header id="main-header">
      <Link to="/">
        <div id="title">
          <img src={logoImg} alt="React Food" />
          <h1>foodie</h1>
        </div>
      </Link>
      <HeaderActions onOpenCart={onOpenCart} />
    </header>
  );
}
