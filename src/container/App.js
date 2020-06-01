import React,{useState} from 'react';
import Header from '../components/header';
import Note from '../components/note';
import Footer from '../components/footer';
import CreateArea from "../components/CreateArea";


function App() {

  const [notes , setNotes ] = useState([])

  
  
  const addItem = (note) =>{
    setNotes(preVal=>{
      return(
        [
          ...preVal,
          note
        ]
      );
    });
  }

  const deleteNote = (id) =>{
    setNotes(preVal=>{
      return preVal.filter((notes,index)=>{
        return index!==id 
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
      add={addItem}
      />
      {notes.map((note,index)=>{
        return(<Note key={index} 
          id={index}
          title={note.title} 
          content={note.content} 
          del={deleteNote}
          />);
      })}
      <br></br>
      <Footer />
    </div>
  );
}


export default App;