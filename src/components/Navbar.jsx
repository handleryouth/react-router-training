import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

function Navbar() {
  return (
    <nav className="Navbar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={linkStyle} to="/About">
          <li>About</li>
        </Link>
        <Link style={linkStyle} to="/Shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
export { linkStyle };
