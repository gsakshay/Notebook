import React,{useState} from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [note , updateNote ] = useState({
    title:"",
    content:""
  })

  const [isExpanded , setExpanded] = useState(false);

  const update = (event) =>{
    event.preventDefault();
    const {value, name} = event.target;
    updateNote(preVal=>{
      return ({
        ...preVal,
        [name]:value
      });
    });
  }

  const expand = () =>{
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input 
        name="title" 
        value={note.title} 
        onChange={update}
        placeholder="Give it a Title"></input>}
        <textarea 
        name="content" 
        value={note.content} 
        onChange={update}
        onClick={expand}
        placeholder="Take a note..." rows={isExpanded?"3":"1"}></textarea>
        <Zoom in={isExpanded}><Fab
        type="button"
        onClick = {()=>{
          props.add(note);
          updateNote({
            title:"",
            content:""
          }); 
        }}
        ><NoteAddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;


//