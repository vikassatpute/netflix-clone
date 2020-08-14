import React, { useState, useEffect } from "react";
import { ReactComponent as LogoIcon } from "./icons/logo.svg";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState([false]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <span className="nfLogo">
        <LogoIcon />
      </span>
    </div>
  );
}

export default Nav;
