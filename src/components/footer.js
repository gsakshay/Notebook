import React from 'react';


let d =  new Date;
let year = d.getFullYear();

function footer () {
	return (
		<footer>
			<p>Copyright ⓒ {year}</p>
		</footer>	
		);
}

export default footer;