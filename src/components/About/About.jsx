import React from "react";
import "./About.css";
import ME from "../../Assets/about_me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function about() {
  return (
    <section id="about" data-aos="fade-left">
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am pursuing B.Tech in Computer Science and Engineering from Brainware University,
            and am looking for an entry-level role to kickstart my career in
            Fullstack Development.<br />
            <br /> Knowledgeable in HTML, CSS, Javascript, programming, and
            Data structure.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
