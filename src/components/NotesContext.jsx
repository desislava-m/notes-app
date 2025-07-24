import { createContext } from "react"
import { useState } from "react"

export const notesContextObj = createContext();


export default function NotesProvider({ children }) {


    const [ notes, setNotes ] = useState([])

    return (
        <notesContextObj.Provider value = {{ notes, setNotes }}>
            {children}
        </notesContextObj.Provider>
    )
}