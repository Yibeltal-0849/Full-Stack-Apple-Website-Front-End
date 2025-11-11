import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Use the same CSS file for styling

const NavItem = ({ href, label, imageSrc }) => {
  return (
    <li className="nav-item">
      <Link to={href} className="nav-link">
        {imageSrc ? (
          <img src={imageSrc} alt="icon" className="nav-icon" />
        ) : (
          label
        )}
      </Link>
    </li>
  );
};

export default NavItem;
