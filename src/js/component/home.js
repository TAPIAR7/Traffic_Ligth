import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
let currentTarget = "red";

//create your first component
export function Home() {
	const [color, setColor] = useState("");
	// setColor(currentTarget);
	const HandleColor = e => {
		let color = e.target.id;
		setColor(color);
	};
	let newClassR = "";
	let newClassY = "";
	let newClassG = "";

	if (color === "red") {
		newClassR = "bg-danger rounded-circle light selected";
	} else {
		newClassR = "bg-danger rounded-circle light";
	}
	if (color === "yellow") {
		newClassY = "bg-warning rounded-circle light selected";
	} else {
		newClassY = "bg-warning rounded-circle light";
	}
	if (color === "green") {
		newClassG = "bg-success rounded-circle light selected";
	} else {
		newClassG = "bg-success rounded-circle light";
	}
	return (
		<div className="container bg-dark d-flex justify-content-center">
			<div id="red" className={newClassR} onClick={HandleColor}></div>
			<div id="yellow" className={newClassY} onClick={HandleColor}></div>
			<div id="green" className={newClassG} onClick={HandleColor}></div>
		</div>
	);
}
