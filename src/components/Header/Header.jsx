import React from "react";
import "./Header.css";
import CTA from "./CTA";
import me from "../../Assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Debika Basu</h1>
        <h3 className="text-light">Fullstack Developer </h3>
        <CTA />

        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
