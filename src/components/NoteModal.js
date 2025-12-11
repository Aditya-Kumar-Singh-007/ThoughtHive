import React from 'react';

const NoteModal = ({ note, onClose }) => {
  if (!note) return null;

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
          <span className="note-modal-tag">{note.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;