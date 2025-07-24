import './App.css'
import AddNote from './components/AddNote'
import NotesProvider from './components/NotesContext'
import NotesList from './components/NotesList'

function App() {

  return (
    <NotesProvider>
      <AddNote />
      <NotesList />
    </NotesProvider>
  )
}

export default App
