import React, { useContext } from "react";
import notesContext from "../context/notes/notesContext";

const NoteItem = ({ note, onEdit, onView }) => {
  const { deleteNote } = useContext(notesContext);

  const handleCardClick = (e) => {
    // Don't trigger if clicking on action buttons
    if (e.target.closest('.note-actions')) {
      return;
    }
    onView(note);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit(note);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteNote(note._id);
  };

  return (
    <article className="note-card" aria-label={note.title || "Note"} onClick={handleCardClick}>
      <div className="note-card-top">
        <span className="note-badge">{note.tag || "Note"}</span>

        <div className="note-actions" role="group" aria-label="Note actions">
          <button
            className="icon-btn icon-edit"
            title="Edit note"
            onClick={handleEditClick}
            aria-label="Edit note"
          >
            ✎
          </button>
          <button
            className="icon-btn icon-delete"
            title="Delete note"
            onClick={handleDeleteClick}
            aria-label="Delete note"
          >
            🗑
          </button>
        </div>
      </div>

      <h3 className="note-title">{note.title}</h3>
      <p className="note-desc">{note.description}</p>
    </article>
  );
};

export default NoteItem;
