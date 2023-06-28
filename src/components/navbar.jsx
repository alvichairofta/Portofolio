import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";
import Logo from "../Assets/Logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            className="logo"
          >
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <HamburgerMenu
            isOpen={isMenuOpen}
            menuClicked={handleMenuToggle}
            width={24}
            height={16}
            strokeWidth={2}
            rotate={0}
            color="#fff"
            borderRadius={0}
            animationDuration={0.3}
          />
        </div>
        <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <NavItem to="portfolio" label="Portfolio" offset={-70} />
            <NavItem to="skills" label="Technologies" offset={-70} />
            <NavItemMail label="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, offset }) => (
  <li className="nav-item">
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className="nav-link"
    >
      {label}
    </Link>
  </li>
);

const NavItemMail = ({ label }) => (
  <li className="nav-item">
    <a href="mailto:alviganteng14@gmail.com" className="nav-link">
      {label}
    </a>
  </li>
);

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import '../styles/App.css';
// import Logo from "../Assets/Logo.png"

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar-brand">
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-300}
//             duration={500}
//             className="logo"
//           >
//            <img src={Logo} alt="" />
//           </Link>
//           <button className={`navbar-toggler ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//         <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`}>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 to="portfolio"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="nav-link"
//                 onClick={toggleNav}
//               >
//                 Portfolio
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="skills"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="nav-link"
//                 onClick={toggleNav}
//               >
//                 Technologies
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="mailto:alviganteng14@gmail.com"
//                 className="nav-link"
//                 onClick={toggleNav}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
