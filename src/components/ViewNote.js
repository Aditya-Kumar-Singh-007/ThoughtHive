import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import notesContext from "../context/notes/notesContext";
import NoteItem from "./NoteItem";
import EditNoteBox from "./EditNoteBox";
import NoteModal from "./NoteModal";

const ViewNote = () => {
  const navigate = useNavigate();
  const context = useContext(notesContext);
  const { notes, fetchNotes, editNote } = context;
  const [showEditBox, setShowEditBox] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalNote, setModalNote] = useState(null);

  const onEdit = (note) => {
    setShowEditBox(true);
    setCurrentNote(note);
  };
  const onClose = () => {
    setShowEditBox(false);
    setCurrentNote(null);
  };
  const onSave = (id, title, description, tag) => {
    editNote(id, title, description, tag);
    setShowEditBox(false);
    setCurrentNote(null);
  };
  const onView = (note) => {
    setModalNote(note);
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
    setModalNote(null);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showEditBox && (
        <EditNoteBox note={currentNote} onCancel={onClose} onSave={onSave} />
      )}
      {showModal && (
        <NoteModal note={modalNote} onClose={onCloseModal} />
      )}

      <div className="notes-view-container">
        <header className="notes-hero">
          <div className="notes-header-content">
            <div className="notes-text">
              <h1 className="notes-title">Your Notes</h1>
              <p className="notes-sub">
                Quickly jot down ideas, tasks or sweet memories — all safely stored.
              </p>
            </div>
          </div>
        </header>

        <main className="notes-main">
          {notes.length === 0 ? (
            <div className="notes-empty">
              <div className="empty-ill">✦</div>
              <h3>No notes yet</h3>
              <p>Create your first note — click <strong>Write Note</strong> to begin.</p>
              <button className="btn write-btn cta mt-2" onClick={() => navigate('/addnote')}>Create a note</button>
            </div>
          ) : (
            <>
              <section className="notes-grid" aria-live="polite">
                {notes.map((note) => (
                  <NoteItem key={note._id} note={note} onEdit={onEdit} onView={onView} />
                ))}
              </section>
              <div className="notes-bottom-action">
                <button
                  className="btn write-btn-small"
                  onClick={() => navigate("/addnote")}
                >
                  ✍️ Write Note
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default ViewNote;
