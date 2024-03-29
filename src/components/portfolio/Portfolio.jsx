import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17557610-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12702648?mode=media",
  },
  {
    id: 2,
    image: IMG2,
    title: "Orion Data visualization kit",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/12670463-Orion-Data-visualization-kit",
  },
  {
    id: 3,
    image: IMG3,
    title: "Parallel coordinates",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/22332104-Parallel-coordinates",
  },
  {
    id: 4,
    image: IMG4,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/23623818-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 5,
    image: IMG5,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/12579723-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/4185100?mode=media",
  },
  {
    id: 6,
    image: IMG6,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/14543891-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
