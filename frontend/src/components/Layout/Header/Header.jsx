import logoImg from "../../../assets/logo.jpg";
import HeaderActions from "./HeaderActions";

export default function Header({ onOpenCart }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="React Food" />
        <h1>foodie</h1>
      </div>
      <HeaderActions onOpenCart={onOpenCart} />
    </header>
  );
}
