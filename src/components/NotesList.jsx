import { useContext } from "react";
import { notesContextObj } from "./NotesContext";

export default function NotesList() {

    const { notes } = useContext(notesContextObj);

    return (
        <>
            <ul>
                {notes.map((note, index) => <li key={index}>{note}</li>)}
            </ul>
        </>
    )

}