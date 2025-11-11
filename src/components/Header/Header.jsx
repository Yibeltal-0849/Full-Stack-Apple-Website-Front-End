// import React from "react";
// import logo from "../../commonResource/images/icons/logo-sm.png";
// import search from "../../commonResource/images/icons/search-icon-sm.png";
// import cart from "../../commonResource/images/icons/cart-sm.png";
// // import "../../commonResource/js/bootstrap.js";
// import "./Header.css";
// import { Link } from "react-router-dom";
// export default function Header() {
//   return (
//     <>
//       {/* Header navigation */}
//       <div className="nav-wrapper fixed-top">
//         <div className="container">
//           <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//             <button
//               className="navbar-toggler navbar-toggler-right"
//               type="button"
//               data-toggle="collapse"
//               data-target=".navbar-collapse"
//             >
//               ☰
//             </button>
//             <Link className="navbar-brand mx-auto" to="/">
//               <img src={logo} />
//             </Link>

//             <div className="navbar-collapse collapse">
//               <ul className="navbar-nav nav-justified w-100 nav-fill">
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/mac/">
//                     Mac
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="./iPhone">
//                     iPhone
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/Ipad">
//                     iPad
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/Watch">
//                     Watch
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/Tv">
//                     Tv
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/Music">
//                     Music
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/Support">
//                     Support
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/search/">
//                     <img src={search} />
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link js-scroll-trigger" to="/cart/">
//                     <img src={cart} />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

const Header = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <Container>
        <Navbar expand="md" collapseOnSelect>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="w-100 nav-justified">
              <Nav.Link as={Link} to="/mac/" className="nav-link">
                Mac
              </Nav.Link>
              <Nav.Link as={Link} to="/iPhone" className="nav-link">
                iPhone
              </Nav.Link>
              <Nav.Link as={Link} to="/iPad" className="nav-link">
                iPad
              </Nav.Link>
              <Nav.Link as={Link} to="/Watch" className="nav-link">
                Watch
              </Nav.Link>
              <Nav.Link as={Link} to="/Tv" className="nav-link">
                TV
              </Nav.Link>
              <Nav.Link as={Link} to="/Music" className="nav-link">
                Music
              </Nav.Link>
              <Nav.Link as={Link} to="/Support" className="nav-link">
                Support
              </Nav.Link>
              <Nav.Link as={Link} to="/search/" className="nav-link">
                <img src={search} alt="Search" />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart/" className="nav-link">
                <img src={cart} alt="Cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
