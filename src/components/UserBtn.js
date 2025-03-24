import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const StateSwitch = function (state) {
	if (typeof state === "boolean") {
		console.log("IS BOOL STATE");
		return (state = !state);
	} else console.log("StateSwitch p NOT BOOL");
};
StateSwitch(true);
console.log(typeof true);

const userState = true;

function UserBtn() {
	return (
		<>
			<div className="userBtn" onClick={() => console.log("sfdsafd")}>
				{" "}
				{/*display none and visibility hideen have no effect on the page loading speed*/}
				<div className="userBtn-circle">
					<div className="userBtn-path">
						<FontAwesomeIcon icon={faUser} />
						{/*<for the popup interface ? />
                  create a conditional render statement for this, so that when we click on the btn it pops up and background is blurred
                  when clicked outside or on the X make it go away
                  perhaps just make another element that blurs above others 

                  we can just make it here and then onClick will toggle the variable that will toggle on the variable (or toggle css) and outside click will toggle it off so I can jsut toggle off the parent
                  
                  */}
					</div>
				</div>
			</div>
			<div className="user-status">
				<div className="user-window">
					{" "}
					{/*display of this is changed while of the children we can change z-index so that one is above the other on click*/}
					<div className="user-upbar">
						<div className="user-login"></div>
						<div className="user-signin"></div>
					</div>
					{/*display of these is changed when specific upbar element is selected, aka upbar elems change z index of these elems below
               no need to dismount them due to often interchanging of each
               make css flexbox for these
               */}
					<div className="user-ui-container">
						<div className="user-login-ui"></div>
						<div className="user-signin-ui"></div>
					</div>
				</div>
				<div className="user-blur"></div>
			</div>
		</>
	);
}
export default UserBtn;
