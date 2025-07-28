import { createContext } from "react"
import { useState, useEffect } from "react"

export const notesContextObj = createContext();


export default function NotesProvider({ children }) {
  // Only on the first render because of the arrow it checks if we have anything in the storage, if not it sets notes to []
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("my-notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  // On the firt render meaning on [] it saves to the storage and every time notes changes it saves the string version to the localStorage
  useEffect(() => {
    localStorage.setItem("my-notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <notesContextObj.Provider value={{ notes, setNotes }}>
      {children}
    </notesContextObj.Provider>
  );
}