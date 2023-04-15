import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="/" className="footer_logo">
        DEBIKA
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Porfolio</a>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/DebikaBasu">
          <BsGithub />
        </a>

        <a href="https://www.instagram.com/devika.basu/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; DEBIKA BASU. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
