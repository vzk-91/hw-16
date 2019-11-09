import React from "react";
// import {  Link } from 'react-router'






const Comp2 = (props) => {
    return(
        <div id="portfolio" className="container">
           <div className={props.name}>
				<div class="box">
                     <a href="#">
                         <img src={props.imagSrc} alt="" className="image image-full"  /></a>
					<h3>{props.title}</h3>
					<p>{props.desc}</p>
					<a href="#" className="button button-small">Etiam posuere</a>
				</div>
			</div>
        </div>
    )
}

export default Comp2;