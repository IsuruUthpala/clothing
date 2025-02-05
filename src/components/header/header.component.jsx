import React from "react";
import "./header.styles.scss";
import { ReactComponent as LOGO } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <LOGO className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
export default Header;
