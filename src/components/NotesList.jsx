import { useContext } from "react";
import { notesContextObj } from "./NotesContext";

export default function NotesList() {

    const { notes, setNotes } = useContext(notesContextObj);

    function handleRemove(note) {
        setNotes((prev) => prev.filter((currentNote) => currentNote !== note))
    }

    return (
        <>
            <ul>
                {notes.map((note, index) => 
                <li key={index}>{note}{' '}
                    <button onClick={() => handleRemove(note)}>Remove</button>
                </li>)}
            </ul>
        </>
    )

}