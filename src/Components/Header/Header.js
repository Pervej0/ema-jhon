import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="text-center">
        <img src={logo} width="400" />
      </div>
      <nav className="px-5 bg-dark border-bottom">
        <ul className="nav">
          <li className="nav-item">
            <a
              href="/Shop"
              className="nav-link text-white"
              aria-current="page"
              href="#"
            >
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a href="/order review" className="nav-link text-white" href="#">
              Order Rivew
            </a>
          </li>
          <li className="nav-item">
            <a href="/inventory" className="nav-link text-white">
              Manage Inventroy
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
