import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function RootLayout() {
  function pringing() {
    console.log("this works");
  }
  pringing();

  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleResize() {
      const x = elementRef.current.offsetLeft;
      const y = elementRef.current.offsetTop;
      setPosition({ x, y });
      console.log(x, y);
      localStorage.setItem("navH", y);
    }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">
            <div>
              <h1>
                <sup>35</sup>
                <span>Br</span>eaking
              </h1>
              <h1 className="fun">
                <sup>17</sup>
                <span>Cl</span>asses
              </h1>
            </div>
          </NavLink>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about-me">About Me</NavLink>
            <NavLink to="about-classes">About Classes</NavLink>
            <NavLink to="booking">Booking</NavLink>
          </div>
        </nav>
      </header>
      <main ref={elementRef}>
        <Outlet />
      </main>
      <footer>
        <div className="footer-container">
          <ul>
            <li>Support</li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Report an issue</Link>
            </li>
            <li>
              <Link>Legal</Link>
            </li>
          </ul>
          <ul>
            <li>Finances</li> {/*make this bolder*/}
            <li>
              <Link>Prices</Link>
            </li>
            <li>
              <Link>Refund</Link>
            </li>
            <li>
              <Link>Guarantee</Link>
            </li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>
              <Link>G-mail</Link>
            </li>
            <li>
              <Link>Phone-Number</Link>
            </li>
            <li>
              <Link>Lawyer</Link>
            </li>
          </ul>
          <div className="footer-logo">
            <NavLink to="/">
              <div>
                <h1>
                  <sup>35</sup>
                  <span>Br</span>eaking
                </h1>
                <h1 className="fun">
                  <sup>17</sup>
                  <span>Cl</span>asses
                </h1>
              </div>
            </NavLink>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
