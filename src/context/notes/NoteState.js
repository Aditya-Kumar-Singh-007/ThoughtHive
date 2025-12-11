import { useState } from "react";
import notesContext from "./notesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNote] = useState(initialNotes);

  // get all notes--------------------------------------------------------
  const fetchNotes = async () => {
    console.log("fetching all notes");
    console.log(localStorage.getItem("token"));
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setNote(json);
  };

  //add note
  const addnote = async (title, description, tag) => {
    console.log("adding note");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    setNote(notes.concat(json.note));
  };

  //delete node
  const deleteNote = async (id) => {
    console.log("deleting note with id :" + id);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNote(newNotes);
  };

  // edit note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    // lOgic for edit
    setNote(
      notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      )
    );
  };

  return (
    <notesContext.Provider
      value={{ notes, setNote, addnote, deleteNote, fetchNotes, editNote }}
    >
      {props.children}
    </notesContext.Provider>
  );
};

export default NoteState;
