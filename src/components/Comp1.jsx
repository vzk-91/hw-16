import React from "react";
// import {  Link } from 'react-router';



const Comp1 = (props) =>{
    return (
        <div id="three-column" className="container">
			<div><span className="arrow-down"></span></div>
			<div id={props.id}>
				<div className="title">
					<h2>{props.title}</h2>
				</div>
				<p>{props.desc}</p>
				<a href="#" className="button">Learn More</a>
			</div>
			</div>
	
    )
}

export default Comp1;