import React, { useContext } from "react";
import notesContext from '../context/notes/notesContext';

const NoteItem = ({ note,id,onEdit}) => {
  const context = useContext(notesContext);
  const {deleteNote} = context
 



  return (
    <div className="col-md-4">
      <div className="note-card card my-3 shadow-sm border-0 position-relative">
        {/* Tag badge */}
        <span className="note-badge badge bg-warning text-dark">
          {note.tag || "Note"}
        </span>

        <div className="card-body">
          {/* Title and icons */}
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0 note-title">{note.title}</h5>
            <div>
              <i
                className="fa-solid fa-pen-to-square text-primary mx-2 icon-btn"
                title="Edit Note"
                onClick={()=>{onEdit(note)}}
              ></i>
              <i
                className="fa-solid fa-trash text-danger mx-2 icon-btn"
                title="Delete Note" onClick={()=>{deleteNote(note._id)}}
              ></i>
            </div>
          </div>

          {/* Description */}
          <p className="card-text mt-2 note-desc">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
