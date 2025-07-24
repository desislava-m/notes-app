import { notesContextObj } from "./NotesContext"
import { useContext, useState } from "react"

export default function AddNote() {

    const { setNotes } = useContext(notesContextObj);
    const [ inputText, setInputText ] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if(inputText.trim() === "") return;

        setNotes(prev => [...prev, inputText])
        setInputText("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Add your note:
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </label>
                <button type="submit">Save</button>
            </form>
        </>
    )
}