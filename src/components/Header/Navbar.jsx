//

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "../../commonResource/images/icons/logo.png";
import searchIcon from "../../commonResource/images/icons/search-icon.png";
import cartIcon from "../../commonResource/images/icons/cart.png";
import "./Navbar.css"; // Import styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { label: "Mac", href: "/mac" },
    { label: "iPhone", href: "/iphone" },
    { label: "iPad", href: "/ipad" },
    { label: "Watch", href: "/watch" },
    { label: "TV", href: "/tv" },
    { label: "Music", href: "/music" },
    { label: "Support", href: "/support" },
  ];

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar">
          {/* Mobile Menu Button */}
          <button className="navbar-toggler" onClick={toggleMenu}>
            ☰
          </button>
          {/* Logo */}
          <div>
            <Link to="/" className="">
              <img src={Logo} alt="Logo" className="nav-item" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={`navbar-collapse ${menuOpen ? "active" : ""}`}>
            <ul className="">
              {navLinks.map((link, index) => (
                <NavItem key={index} href={link.href} label={link.label} />
              ))}
              <NavItem href="/search" imageSrc={searchIcon} />
              <NavItem href="/cart" imageSrc={cartIcon} />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
