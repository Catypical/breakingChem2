import React, { useRef, useState } from "react";
import { NavLink, Link, useHref } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../index.css";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
/*import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";*/

// IMG import
import ClassesImg from "../photos/Classes-1200.webp";
import Nobel364 from "../photos/Nobel-364.jpg";
import Nobel728 from "../photos/Nobel-728.jpeg";
import Nobel1456ltw from "../photos/Nobel-1456-ltw.webp";
import WalterHero920 from "../photos/WalterHero-920.jpeg";
import ChemF from "../photos/ChemF-509.webp";
import ChemA from "../photos/ChemA-1578.jpg";

import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const headElement = document.getElementsByTagName("header");
console.log(headElement);
const navH = localStorage.getItem("navH");
///
export default function Home() {
  const homeAboutCTA = document.querySelector(".home-about > a ");
  const homeABT = document.querySelector(".home-about");
  console.log(homeABT);

  const homeClassesCTA = document.querySelector(".home-classes > a ");
  ///
  const homeAboutLinks = document.querySelectorAll(".home-about * *:is(a)");
  /*home about section that has second child that is svg that has p immediatelly after which has descendent a*/
  const homeAboutSvgs = document.querySelectorAll(
    ".home-about * *:is(svg):has( + p > a)"
  );

  const homeClassesLinks = document.querySelectorAll(".home-classes * *:is(a)");

  const homeClassesSvgs = document.querySelectorAll(
    ".home-classes * *:is(svg):has( + p > a)"
  );

  console.log(document.querySelectorAll(".background-left")[0]);

  /*
  

  
  */
  return (
    <>
      <div /*using localStorage for dynamic height*/
        style={{ minHeight: `calc(100vh - ${navH}px + 1px)` }}
        className="hero-container"
      >
        <div className="hero-left">
          <div className="hero-text">
            <div className="hero-main-text">
              <h1>
                <span>W</span>alter <span>W</span>hite
              </h1>
              <h2>Chemistry</h2>
              <h2>Professor</h2>
            </div>
            <div className="hero-cta">
              <NavLink to="/booking">Booking</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="hero-icons">
            <NavLink>
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faFacebook} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faYoutube} />
            </NavLink>
          </div>
        </div>
        <div className="hero-img">
          <LazyLoadImage
            style={{ height: `calc(100vh - ${navH}px - 6.4rem)` }}
            src={WalterHero920}
          />
        </div>
      </div>
      <div className="home-container">
        <div className="home-about">
          <p>Quality</p>

          <div>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>
              Graduated from the{" "}
              <NavLink to="https://www.caltech.edu/">
                California Institute of Technology
              </NavLink>
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>
              Former researcher at{" "}
              <NavLink to="https://www.sandia.gov/">
                Sandia National Laboratory
              </NavLink>
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Contributer on photon radiology and Nobel laureate </p>
          </div>

          <NavLink
            onMouseEnter={(e) => {
              /*this is the generalized way of selecting links and svgs above CtAs*/
              //this destructures and makes HTMLCollection into Array
              [...e.target.parentElement.children].forEach((i) => {
                //console.log([...i.children]);
                [...i.children].forEach((i) => {
                  [
                    ...i.parentElement.querySelectorAll(
                      "* > *:has(:first-child)"
                    ),
                  ].forEach((i) =>
                    i
                      .querySelector("*")
                      .setAttribute(
                        "style",
                        "color: var(--secondary-yellow); text-decoration: underline 1px transparent;"
                      )
                  );
                });
              });
            }}
            onMouseLeave={(e) => {
              [...e.target.parentElement.children].forEach((i) => {
                //console.log([...i.children]);
                [...i.children].forEach((i) => {
                  [
                    ...i.parentElement.querySelectorAll(
                      "* > *:has(:first-child)"
                    ),
                  ].forEach((i) =>
                    i.querySelector("*").setAttribute("style", "unset:all")
                  );
                });
              });
            }}
            to="/about-me"
          >
            About me
          </NavLink>
        </div>
        <div className="xdxdxd">
          <LazyLoadImage
            src={Nobel1456ltw}
            placeholderSrc={Nobel364}
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage src={ClassesImg} />
        </div>
        <div className="home-classes">
          <p>And Practice</p>

          <div>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Hands on approach, focus on practice of chemistry</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Real world examples and chemistry applications</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>
              Proper <NavLink to="/legal">equipment and safety</NavLink>{" "}
              procautions
            </p>
          </div>

          <NavLink
            onMouseEnter={(e) => {
              /*this is the generalized way of selecting links and svgs above CtAs*/
              //this destructures and makes HTMLCollection into Array
              [...e.target.parentElement.children].forEach((i) => {
                //console.log([...i.children]);
                [...i.children].forEach((i) => {
                  [
                    ...i.parentElement.querySelectorAll(
                      "* > *:has(:first-child)"
                    ),
                  ].forEach((i) =>
                    i
                      .querySelector("*")
                      .setAttribute(
                        "style",
                        "color: var(--secondary-yellow); text-decoration: underline 1px transparent;"
                      )
                  );
                });
              });
            }}
            onMouseLeave={(e) => {
              [...e.target.parentElement.children].forEach((i) => {
                //console.log([...i.children]);
                [...i.children].forEach((i) => {
                  [
                    ...i.parentElement.querySelectorAll(
                      "* > *:has(:first-child)"
                    ),
                  ].forEach((i) =>
                    i.querySelector("*").setAttribute("style", "unset:all")
                  );
                });
              });
            }}
            to="/classes"
          >
            Classes
          </NavLink>
        </div>

        {/*
            
            
            background-image: linear-gradient(
      rgba(0, 0, 0, 0.8) 10%,
       hsla(141, 100%, 62%, 0.6) 200%
    )
            
            */}
        <div
          onMouseEnter={(e) => {
            document.querySelectorAll(".border-left")[0].setAttribute(
              //this sets background shade to be darker
              "style",
              "opacity: 100%"
            );
            //write here the linear gradient for border
          }}
          onMouseLeave={(e) => {
            document.querySelectorAll(".border-left")[0].setAttribute(
              //this sets background shade to be darker
              "style",
              "unset: all"
            );
            //write here the linear gradient for border
          }}
          className="home-cta-left overlay-dk"
        >
          <div className="border-left"></div>
          <div className="background-left"></div>
          <p>
            Go from struggling and <span>Failing</span>...
          </p>
          {/*
          <LazyLoadImage src={ChemF} />*/}
        </div>
        <div className="home-cta-right overlay-dk">
          <div className="background-right"></div>
          <p>
            To <span>Acing</span> your exams!
          </p>

          {/*<LazyLoadImage src={ChemA} />*/}
          <NavLink to="/booking">Booking</NavLink>
        </div>
      </div>
    </>
  );
}
