import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import UserBtn from "../components/UserBtn";

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
		console.log(UserBtn);
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

	const rootMenuRef = useRef(null);
	useEffect(() => {
		const Clicked = (e) => {
			if (rootMenuRef.current && rootMenuRef.current.contains(e.target)) {
				e.stopImmediatePropagation();
				console.log(1111111111111);
				console.log(rootMenuRef.current);
				console.log(e.target);
				//event is registred, comes to event handler, stops due to stopPropagation

				/*document
					.querySelectorAll(".nav-links-filter")[0]
					.setAttribute("style", "visibility: visible; opacity:1;");*/
				return;
			} else {
				console.log(22222);
				/*
				document
					.querySelectorAll(".nav-links-filter")[0]
					.setAttribute("style", "visibility: hidden; opacity:0;");*/
				/*document
					.querySelectorAll(".nav-links")[0]
					.setAttribute("style", "transform: translate(0,0)");*/
			}
		};
		console.log(1111111111111);
		window.addEventListener("click", Clicked);

		return () => {
			console.log(1111111111111);
			window.removeEventListener("click", Clicked);
		};
	}, [rootMenuRef]);

	return (
		<div className="root-layout">
			<UserBtn />
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
						ref={rootMenuRef}
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
						<NavLink to="about-courses">About Courses</NavLink>
						<NavLink to="my-courses">My Courses</NavLink>
					</div>

					{(() => {
						if (window.innerWidth <= 500) {
							return (
								<div
									className="nav-links-filter"
									onClick={(e) => {
										//transform: translate(100%, 0);
										console.log(e, "this as menu");
										document
											.getElementsByClassName(
												"nav-links"
											)[0]
											.setAttribute(
												"style",
												"transform: translate(100%, 0); z-index: 1000; filter: blur(0px) !important;"
											);

										document
											.querySelectorAll(
												".nav-links-filter"
											)[0]
											.setAttribute(
												"style",
												"unset: all;"
											);

										console.log("menu e");
										console.log(e);
										console.log(
											document.querySelectorAll(
												".nav-links"
											)[0]
										);
									}}
								></div>
							);
						}
					})()}

					{
						//on useEffect becasue or press of compoennt will trigger it we can just render this component
					}

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
								.querySelectorAll(".nav-links-filter")[0]
								.setAttribute(
									"style",
									"visibility:visible; opacity:1;transition: visibility 0.6s, opacity 0.6s;"
								);

							console.log("menu e");
							console.log(e);
							console.log(
								document.querySelectorAll(".nav-links")[0]
							);
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
