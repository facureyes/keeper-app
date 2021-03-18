import React, {useState} from "react"

function CreateArea(props){
    const [newNote, setNote] = useState({
        title: "",
        content: ""
    });
    
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

    return (
        <form className="create-note">
            <input onChange={handleChange} className="title" type="text" name="title" placeholder="Title" value={newNote.title} />
            <textarea onChange={handleChange} type="text" name="content" placeholder="Content" value={newNote.content} />
            <button type="submit" onClick={(event)=>{
                    props.addNote(newNote);
                    setNote({title:"", content:""});
                    event.preventDefault();
                    }
                }>
                Add
            </button>

            
        </form>
    )
}

export default CreateArea;