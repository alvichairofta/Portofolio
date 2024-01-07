import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import Mock from "../Assets/mockuuups.png";
import Mock2 from "../Assets/Smpn4.png";
import Mock3 from "../Assets/rest.png";
import Mock4 from "../Assets/tdl.png";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio-container" id="portfolio">
      <div className="Work">
        <h4>My Recent Work</h4>
        <h1>Portfolio</h1>
      </div>
      <div className="card">
        <div className="Detail" data-aos="fade-up" data-aos-duration="500">
          <h2>CINEMATARA</h2>
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
            <a href="https://cinemanusantara.xyz/">Visit website</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="Detail" data-aos="fade-up" data-aos-duration="500">
          <h2>SMPN 4 KOTA TANGERANG</h2>
          <h1>School Website</h1>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, possimus magnam, modi ducimus a odit in sit inventore quibusdam facere hic ipsum, mollitia fuga. Vel inventore at amet sit sapiente!
          </p>
          <button>
            <a
              href="https://smpn4kotatangerang.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
        <div className="Mockup" data-aos="fade-up" data-aos-duration="500">
          <img src={Mock2} alt="Mockup-Matara" />
          <div className="visit-web">
            <a href="https://smpn4kotatangerang.sch.id/">Visit website</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="Detail" data-aos="fade-up" data-aos-duration="500">
          <h2>DeLouvre</h2>
          <h1>Restaurant Website</h1>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, possimus magnam, modi ducimus a odit in sit inventore quibusdam facere hic ipsum, mollitia fuga. Vel inventore at amet sit sapiente!
          </p>
          <button>
            <a
              href="https://if330-delouvre.xyz//"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
        <div className="Mockup" data-aos="fade-up" data-aos-duration="500">
          <img src={Mock3} alt="Mockup-Matara" />
          <div className="visit-web">
            <a href="https://if330-delouvre.xyz/">Visit website</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="Detail" data-aos="fade-up" data-aos-duration="500">
          <h2>TO DO LIST</h2>
          <h1>TodoList Website</h1>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, possimus magnam, modi ducimus a odit in sit inventore quibusdam facere hic ipsum, mollitia fuga. Vel inventore at amet sit sapiente!
          </p>
          <button>
            <a
              href="https://if330-todolist.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
        <div className="Mockup" data-aos="fade-up" data-aos-duration="500">
          <img src={Mock4} alt="Mockup-Matara" />
          <div className="visit-web">
            <a href="https://if330-todolist.xyz/">Visit website</a>
          </div>
        </div>
      </div>
    </div>
  );
}
