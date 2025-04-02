import React from "react";

import "./Work.scss";
import ecotreecarePhoto from "../../img/ecotreecare.png";
import cryptoConverter from "../../img/cryptoConverter.png";
import monarchTrackerPhoto from "../../img/monarchtracker.png";
import asteroids from "../../img/asteroids.png";
import snakeGame from "../../img/snakeGame.png";
import tbd from "../../img/TBD.jpg";

const Work = () => {
  return (
    <>
      <main id="work">
        <h1 className="lg-heading sm-heading">
          <i className="fa-regular fab-chart-network"></i>
          My Work
          {/* <span className="text-secondary">Work</span> */}
        </h1>
        {/* <h2 className="sm-heading">MERN stack</h2> */}
        <div className="projects">
          <div className="item">
            <a href="https://ecotreecare.org/">
              <img src={ecotreecarePhoto} alt="project1" />
            </a>
            <a href="#" className="btn-light">
              <i className="fas fa-eye"></i> EcoTreeCare
            </a>
            <a
              href="https://github.com/mmbower1/ecotreecare"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="https://monarchtracker.com/">
              <img src={monarchTrackerPhoto} alt="project2" />
            </a>
            <a href="#" className="btn-light">
              <i className="fas fa-eye"></i> MonarchTracker.com
            </a>
            <a
              href="https://github.com/mmbower1/react-ecommerce-traversy"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="https://mmbower1.github.io/monarch_crypto_converter/">
              <img src={cryptoConverter} alt="project3" />
            </a>
            <div to="" className="btn-light">
              <i className="fas fa-eye"></i> Crypto Converter
            </div>
            <a
              href="https://github.com/mmbower1/monarchConnector"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="https://mmbower1.github.io/asteroids/">
              <img src={asteroids} alt="project4" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Asteroids
            </a>
            <a
              href="https://github.com/mmbower1/asteroids"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="https://mmbower1.github.io/snakeGame/">
              <img src={snakeGame} alt="project5" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Snake Game
            </a>
            <a
              href="https://github.com/mmbower1/snakeGame"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={tbd} alt="TBD" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Project 6
            </a>
            <a href="#!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
