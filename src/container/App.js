import React from 'react';
import Header from '../components/header';
import Note from '../components/note';
import Footer from '../components/footer';
import notes from '../components/notes';

const createNote = (note) =>{
	return(
	<Note 
				title = {note.title}
				content = {note.content}
	/>
	);
} 

function App(){
	return(
		<div>
			<Header />
				{notes.map(createNote)}
			<Footer />
		</div>	
		);
}

export default App;