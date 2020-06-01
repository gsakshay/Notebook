import React from 'react';


let d =  new Date();
let year = d.getFullYear();

function footer () {
	return (
		<footer style={{backgroundColor:"transparent"}}className="page-footer">
			<p>Copyright ⓒ {year} <br></br> Created by A8</p>
		</footer>	
		);
}

export default footer;