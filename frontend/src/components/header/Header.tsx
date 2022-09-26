import react, { useState, useContext } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Cart } from "../../utils/Store";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./../../assets/eStore.png";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div className="header">
      <div className="header-left">
        <div className="language">
          <span>EN</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch />
        </div>
      </div>

      <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
        {/* <h3 className="header-heading">Store</h3> */}
        <img
          src={Logo}
          style={{
            width: "10%",
            minWidth: "10%",
            height: "auto",
          }}
        />
      </Link>

      <div className="header-right">
        <span>register</span>
        <Link to="/login">
          <span>Sign in</span>{" "}
        </Link>

        <div className="cart">
          <AiOutlineShoppingCart style={{ zIndex: "999" }} />
          <div className="cartNo">{cart.length}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
