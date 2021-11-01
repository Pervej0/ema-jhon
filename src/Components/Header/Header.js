import React from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebse from "../../Hooks/useFirebase";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <header>
      <div className="text-center">
        <Link to="/shop">
          <img src={logo} width="400" alt="" />
        </Link>
      </div>
      <nav className="px-5 bg-dark border-bottom">
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              to="/Shop"
              className="nav-link text-white"
              aria-current="page"
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/review" className="nav-link text-white" href="#">
              Order Rivew
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/inventory" className="nav-link text-white">
              Manage Inventroy
            </NavLink>
          </li>
          {user && (
            <>
              <li className="nav-item">
                <span className="nav-link text-white px-0">
                  {user.displayName}
                </span>
              </li>
              <li className="nav-item">
                <NavLink to="/myOrder" className="nav-link text-white">
                  My Orders
                </NavLink>
              </li>
            </>
          )}
          {user ? (
            <li className="nav-item">
              <NavLink
                to="/login"
                onClick={logOut}
                className="nav-link text-white"
              >
                Log out
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link text-white">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
