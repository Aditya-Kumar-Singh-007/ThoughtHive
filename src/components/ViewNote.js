import React, { useContext, useEffect, useState } from "react";
import notesContext from "../context/notes/notesContext";
import NoteItem from "./NoteItem";
import EditNoteBox from "./EditNoteBox";

const ViewNote = () => {
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
  const onSave = () => {
    editNote(
      currentNote.id,
      currentNote.title,
      currentNote.description,
      currentNote.tag
    );
    setShowEditBox(false);
    setCurrentNote(null);
  };

  useEffect(() => {
    fetchNotes();
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
          <div className="row my-3">
            {notes.map((note) => {
              return <NoteItem key={note._id} note={note} onEdit={onEdit} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewNote;
