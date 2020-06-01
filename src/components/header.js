import React from 'react';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const header = () => {
	return (
		<header className="nav-wrapper">
				<h1 style={{cursor:"pointer"}}> Noteb<ImportContactsIcon style={{fontSize:"1.8rem"}}/>k </h1>
			</header>
		);
}

export default header;