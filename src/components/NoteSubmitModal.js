//New Note adding

import React from "react";

const NoteSubmitModal = ({ noteTitle, showModal, addAnother, viewNote }) => {
  
  // Safely handle case where noteTitle might be undefined
  const title = noteTitle? noteTitle.toUpperCase() : "UNTITLED";
  if (!showModal) {
    return null;
  }
  return (
    <div className="submit-modal-overlay" onClick={viewNote}>
      <div className="submit-modal" onClick={(e) => e.stopPropagation()}>
        <div className="submit-modal-header">
          <h2 className="submit-modal-title">Brilliantly Captured!</h2>
        </div>
        <div className="submit-modal-body">
          <p className="submit-modal-message">
            Your masterpiece <strong>"{title}"</strong> is now safely stored in your digital sanctuary.
          </p>
        </div>
        <div className="submit-modal-footer">
          <button className="submit-btn submit-btn-secondary" onClick={addAnother}>
            Add Another
          </button>
          <button className="submit-btn submit-btn-primary" onClick={viewNote}>
            View Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteSubmitModal;
