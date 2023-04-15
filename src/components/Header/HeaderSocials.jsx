import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/debikabasu/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/DebikaBasu"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/devika.basu/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
