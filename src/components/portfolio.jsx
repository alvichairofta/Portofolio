import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import Mock from "../Assets/mockuuups.png";
import "./portfolio.css";
import Arrow from "../Assets/arrow.png";

export default function Portfolio() {
  return (
    <div className="Portfolio-container" id="portfolio">
      <div className="Work">
        <h4>My Recent Work</h4>
        <h1>Portfolio</h1>
      </div>
      <div className="card">
        <div className="Detail" data-aos="fade-up" data-aos-duration="500">
          <h2>Matara Website</h2>
          <h1>Movie Data Search Website, Especially Indonesian Movies</h1>
          <p>
            Complete and updated Indonesian movie data collection website. It is
            a project for the final exam of the semester at Multimedia Nusantara
            University which was made by a team of 4 people.
          </p>
          <button>
            <a
              href="https://cinemanusantara.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
        <div className="Mockup" data-aos="fade-up" data-aos-duration="500">
          <img src={Mock} alt="Mockup-Matara" />
          <div className="visit-web">
            <a href="https://cinemanusantara.xyz/">Visi website</a>
          </div>
        </div>
      </div>
    </div>
  );
}
