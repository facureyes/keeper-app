import React, {useState} from "react"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    const [newNote, setNote] = useState({
        title: "",
        content: ""
    });
    
    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event){
        const change = {
            field: event.target.name,
            value: event.target.value
        }
        setNote((prevStatus)=>{
            return {...prevStatus,
                    [change.field]:change.value
            }
        })
    }

    function handleClick(event){
        props.addNote(newNote);
        setNote({title:"", content:""});
        setExpanded(false);
        event.preventDefault();
    }

    function expand(event){
        setExpanded(true);
    }

    return (
        <form className="create-note">
            {isExpanded && <input onChange={handleChange} className="title" type="text" name="title" placeholder="Title" value={newNote.title} />}
            <textarea onChange={handleChange} onClick={expand} type="text" name="content" placeholder="Take a note..." value={newNote.content} rows={isExpanded ? "3" : "1"}/>
            <Zoom in={isExpanded}>
                <Fab color="primary" aria-label="add" type="submit" onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    )
}

export default CreateArea;