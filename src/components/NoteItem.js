import React, { useContext } from "react";
import notesContext from "../context/notes/notesContext";

const NoteItem = ({ note, onEdit, onView }) => {
  const { deleteNote } = useContext(notesContext);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

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
        <span className="note-badge">{note.tags || note.tag || "General"}</span>

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
      
      <div className="note-footer">
        <span className="note-date">{formatDate(note.date)}</span>
      </div>
    </article>
  );
};

export default NoteItem;
