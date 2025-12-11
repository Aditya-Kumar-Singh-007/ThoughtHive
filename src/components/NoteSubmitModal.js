//New Note adding

import React from "react";

const NoteSubmitModal = ({ noteTitle, showModal, addAnother, viewNote }) => {
  
  // Safely handle case where noteTitle might be undefined
  const title = noteTitle? noteTitle.toUpperCase() : "UNTITLED";
  if (!showModal) {
    return null;
  }
  return (
    <div>
      <div
        className="modal fade show"
        tabIndex={-1}
        role="dialog"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)", // backdrop effect
        }
      } onClick={viewNote}
      >
        <div className="modal-dialog" onClick={(e)=>{e.stopPropagation()}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Note Saved !</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{`Your Note with title  ${title} has been saved successfully`}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={addAnother}
              >
                Add another
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={viewNote}
              >
                View Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteSubmitModal;
