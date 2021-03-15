import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Note from  "./Note"
import CreateArea from "./CreateArea";
import initial_notes from "../notes"


function App() {

    const [notes, editNotes] = useState(initial_notes);

    function addNote(note){
        const newNote = {
            key: notes.length === 0 ? 1 : notes[notes.length -1].key + 1,
            title: note.title,
            content: note.content
        }

        editNotes((prevStatus)=>{
            return (
                [...prevStatus, newNote]
            )
        })
    }

    function deleteNote(id){
        editNotes((prevStatus)=>{
            return [...prevStatus.filter( (e)=> e.key !== id)]
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map( 
                note => (
                    <Note 
                        id= {note.key}
                        key= {note.key}
                        title= {note.title}
                        content = {note.content}
                        deleteNote={deleteNote}
                    />
                )
            )}
            <Footer />
        </div>
    )
}

export default App