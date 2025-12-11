import React from 'react';

const NoteModal = ({ note, onClose }) => {
  if (!note) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="note-modal-overlay" onClick={handleOverlayClick}>
      <div className="note-modal">
        <div className="note-modal-header">
          <h2 className="note-modal-title">{note.title}</h2>
          <button className="note-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="note-modal-body">
          <p className="note-modal-description">{note.description}</p>
          <div className="note-modal-footer">
            <span className="note-modal-tag">{note.tags || note.tag || "General"}</span>
            <span className="note-modal-date">{formatDate(note.date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;