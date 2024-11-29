import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
/*
document
	.getElementsByClassName("nav-links")[0]
	.setAttribute("style", "background-color: red;");
   */

/*
document.addEventListener("click")
*/
/*
function hideOnClickOutside(element, styledElement, style) {
	const outsideClickListener = (event) => {
		if (!element.contains(event.currentTarget)) {
			// or use: event.target.closest(selector) === null

			//element.style.display = 'none';

			styledElement.setAttribute("style", `${style}`);

			removeClickListener();
		}
	};

	const removeClickListener = () => {
		document.removeEventListener("click", outsideClickListener);
	};

	document.addEventListener("click", outsideClickListener);
}
*/

/*
hideOnClickOutside(
	document.querySelectorAll(".nav-links")[0],
	document.querySelectorAll(".nav-links")[0],
	"transform: translate(0, 0);"
);
*/
//const elem = document.querySelectorAll(".nav-links")[0];
//console.log(elem, "CURRENT TEST");

function elemF(elem) {
	console.log(elem, "CURRENT TEST");
}
elemF(document.querySelectorAll(".nav-links")[0]);

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
					<div
						className="nav-links"

						/*
						onClick={(e) => {
							document
								.getElementsByClassName("nav-links")[0]
								.setAttribute(
									"style",
									"transform: translate(100%, 0); z-index: 1000; filter: blur(0px) !important;"
								);

							document
								.querySelectorAll(".nav-links")[0]
								.style.setProperty(
									"--nav-links-A-display",
									"none"
								);
						}}
                        */
					>
						<NavLink to="/">Home</NavLink>
						<NavLink to="about-me">About Me</NavLink>
						<NavLink to="about-classes">About Classes</NavLink>
						<NavLink to="booking">Booking</NavLink>
					</div>
					<button
						className="root-menu"
						onClick={(e) => {
							//transform: translate(100%, 0);
							console.log(e, "this as menu");
							document
								.getElementsByClassName("nav-links")[0]
								.setAttribute(
									"style",
									"transform: translate(0, 0); z-index: 1000; filter: blur(0px) !important;"
								);

							document
								.querySelectorAll(".nav-links")[0]
								.style.setProperty(
									"--nav-links-A-display",
									"inline-block"
								);

							console.log("menu e");
							console.log(e);
						}}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
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

/*!!!!! you can do onClick event outside, just instead of inline, make it document.QSA(..).onClick = doSomething */
{
	/*
	function element() {
		const refToElement = useRef();
		useEffect(() => {
			const Clicked = (e) => {
				if (ref.current && ref.current.contains(e.target)) {
					e.stopPropagation();
					return;
				}
			};

			window.addEventListener("click", Clicked);

			return () => {
				window.removeEventListener("click", Clicked);
			};
		}, [ref]);

		return <element ref={refToElement}></element>;
	}
      */
}
