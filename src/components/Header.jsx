import headerImg from "../assets/investment-calculator-logo.png";
import "../index.css";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImg}></img>
      <h1> Investment Calculator</h1>
    </header>
  );
}
