import { useState } from "react";
import notesContext from "./notesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNote] = useState(initialNotes);

  // get all notes--------------------------------------------------------
  const fetchNotes = async () => {
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMGRmMDAyYmZjNmNmZTMzN2I1NWQ3In0sImlhdCI6MTc2MTc1NzQzM30.GFf0rAYrI2HiafAJvWi6AaDciM58uV6ZZDZ45ILitBk",
      },
    });
    const json = await response.json();
    console.log(json);
    setNote(json);
}

    //add note
    const addnote = async (title, description, tag) => {
      console.log("adding note");
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMGRmMDAyYmZjNmNmZTMzN2I1NWQ3In0sImlhdCI6MTc2MTc1NzQzM30.GFf0rAYrI2HiafAJvWi6AaDciM58uV6ZZDZ45ILitBk",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json=await response.json();
      console.log(json);

      
      const note = {
        _id: "6902541de595effa1de5ae27",
        user: "6900df002bfc6cfe337b55d7",
        title: title,
        description: description,
        tag: tag,
        date: "2025-10-29T17:51:25.497Z",
        __v: 0,
      };

      setNote(notes.concat(note));
    };

    //delete node
    const deleteNote = async(id) => {
      console.log("deleting note with id :" + id);
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMGRmMDAyYmZjNmNmZTMzN2I1NWQ3In0sImlhdCI6MTc2MTc1NzQzM30.GFf0rAYrI2HiafAJvWi6AaDciM58uV6ZZDZ45ILitBk",
        },
      });
      const json=await response.json();
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMGRmMDAyYmZjNmNmZTMzN2I1NWQ3In0sImlhdCI6MTc2MTc1NzQzM30.GFf0rAYrI2HiafAJvWi6AaDciM58uV6ZZDZ45ILitBk",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json=await response.json();
      console.log(json);

      // lOgic for edit
      for (var index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    };

    return (
      <notesContext.Provider
        value={{ notes, setNote, addnote, deleteNote, fetchNotes ,editNote}}
      >
        {props.children}
      </notesContext.Provider>
    );
  };

export default NoteState;
