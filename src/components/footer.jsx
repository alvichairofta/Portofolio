import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./footer.css";
import Logo from "../Assets/Logo.png"
import Wa from "../Assets/whatsapp.png"
import ig from "../Assets/instagram.png"
import linkedin from "../Assets/linkedin.png"

const Footer = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
    return (
      <footer>
        <div className="container-footer">
          <div className="row">
            <div className="col-md-6">
                <h1>Let’s make something amazing together.</h1>
                <img src={Logo} alt="" />
                <p>Frontend Developer</p>
            </div>
            <div className="col-md-3">
              <ul className="footer-links">
              <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="mailto:alviganteng14@gmail.com"
                className="nav-link"
                onClick={toggleNav}
              >
                Contact
              </a>
            </li>
              </ul>
            </div>
            <div className="col-md-3">
                <ul className="footer-m">
                    <li>
                    <a href="https://wa.me/6289633466729" target="blank">
                        <img src={Wa} alt="linkedin picture" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/chairoftalvi" target="blank">
                        <img src={ig} alt="linkedin picture" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/alvi-chairofta-692364257/" target="blank">
                        <img src={linkedin} alt="linkedin picture" />
                    </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;
