
function Note({ id, title, content, onDelete, onUpdate }) {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button
        onClick={() =>
          onUpdate(id, {
            title: prompt("Edit title:", title),
            content: prompt("Edit content:", content),
          })
        }
      >
        Update
      </button>
    </div>
  )
}
export default Note
