import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services" data-aos="zoom-in" data-aos-duration="800">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <a href="#portfolio" style={{ textDecoration: "none", color: "white" }}>
          <article className="service">
            <div className="service_head">
              <h3>FrontEnd Developer </h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I have a keen knowledge of HTMl , Css and javascript and
                  created some projects too. Click to visit them.
                </p>
              </li>
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I do have more than 2 years of experience in this and
                  Currently I am Learning MERN stack.
                </p>
              </li>
            </ul>
          </article>
        </a>

        <article
          className="service"
          onClick={() => {
            window.open(
              "#"
            );
          }}
        >
          <div className="service_head">
            <h3> BackEnd Developer </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                I am quite Familier with NodeJS , Express and
                contribute my experience in community.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                I also work for Google Cloud Community Day Kolkata 2023 as a backend developer
                and create
                their official website which is now live.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
