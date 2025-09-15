import React, { useState } from "react"

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" })

  function handleChange(e) {
    const { name, value } = e.target
    setNote((prev) => ({ ...prev, [name]: value }))
  }

  function submitNote(e) {
    e.preventDefault()
    if (note.title.trim() || note.content.trim()) {
      onAdd(note)
      setNote({ title: "", content: "" })
    }
  }

  return (
    <form className="create-area">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button onClick={submitNote}>Add</button>
    </form>
  )
}

export default CreateArea
