import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        TANISHQ
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/wishlist">♡ Wishlist</Link>

        <Link to="/cart">
           Cart ({cartCount})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;