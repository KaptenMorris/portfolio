import React from "react";
import "./about.css";
import "../../index.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about__card">
              <IoIosSchool className="about__icon" />
              <h5>Educations</h5>
              <small>5+ Completed </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed </small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illum laborum accusantium vel earum tempore maiores eaque.
            Exercitationem labore, aspernatur ipsum commodi qui saepe neque,
            eveniet quo dolore eaque amet.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
