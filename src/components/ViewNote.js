import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import notesContext from "../context/notes/notesContext";
import NoteItem from "./NoteItem";
import EditNoteBox from "./EditNoteBox";

const ViewNote = () => {
  const navigate = useNavigate();
  const context = useContext(notesContext);
  const { notes, fetchNotes, editNote } = context;
  const [showEditBox, setShowEditBox] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const onEdit = (note) => {
    setShowEditBox(true);
    setCurrentNote(note);
  };
  const onClose = () => {
    setShowEditBox(false);
    setCurrentNote(null);
  };
  const onSave = (id, title, description, tag) => {
    console.log("Saving changes for", id);
    editNote(id, title, description, tag);
    setShowEditBox(false);
    setCurrentNote(null);
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchNotes();
    }else{
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showEditBox && (
        <EditNoteBox note={currentNote} onCancel={onClose} onSave={onSave} />
      )}
      <div className="text-center my-4">
        <h1>Your Notes</h1>
        <div className="container">
          {notes.length===0 && <div className="text-center my-5">No notes to display</div>}  {/*add something later on*/}
          <div className="row my-3">
            {notes.map((note) => {
              return <NoteItem key={note._id} note={note} onEdit={onEdit} />;
            })}
          </div>
        </div>
        <div className="home-buttons">
          <button className="btn write-btn" onClick={() => navigate('/addnote')}>
            ✍️ Write Note
          </button>
          
        </div>
      </div>
    </>
  );
};

export default ViewNote;
