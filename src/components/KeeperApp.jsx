import React, { useState, useEffect } from "react"
import Header from "./Header"
import Note from "./Note"
import CreateArea from "./CreateArea"
import "./KeeperApp.css"

function KeeperApp() {
  const [notes, setNotes] = useState([])

  // Load from localStorage
  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem("keeper-notes"))
      if (savedNotes && Array.isArray(savedNotes)) {
        setNotes(savedNotes)
      }
    } catch (error) {
      console.error("Error loading notes from localStorage:", error)
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (notes.length > 0) {
      try {
        localStorage.setItem("keeper-notes", JSON.stringify(notes))
      } catch (error) {
        console.error("Error saving notes:", error)
      }
    }
  }, [notes])

  function addNote(newNote) {
    const noteWithId = { ...newNote, id: Date.now() }
    setNotes((prevNotes) => [...prevNotes, noteWithId])
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
  }

  function updateNote(noteId, updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, ...updatedNote } : note
      )
    )
  }

//   function clearNotes() {
//     setNotes([])
//     localStorage.removeItem("keeper-notes")
//   }

function clearNotes() {
  const confirmClear = window.confirm(
    "Are you sure you want to delete ALL notes? This cannot be undone."
  )
  if (confirmClear) {
    setNotes([])
    localStorage.removeItem("keeper-notes")
  }
}


  return (
    <div className="keeper-app">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-grid">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </div>

      {/* ✅ Clear All Notes button */}
      {notes.length > 0 && (
        <div className="clear-notes">
          <button onClick={clearNotes}>Clear All Notes</button>
        </div>
      )}
    </div>
  )
}

export default KeeperApp
