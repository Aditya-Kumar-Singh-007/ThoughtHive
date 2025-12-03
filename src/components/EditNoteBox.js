import React, { useState, useEffect } from 'react'

const EditNoteBox = ({note, onSave, onCancel}) => {
  const [editedNote, setEditedNote] = useState({title: "", description: "", tag: ""});

  useEffect(() => {
    if (note) {
      setEditedNote({
        title: note.title || "",
        description: note.description || "",
        tag: note.tag || ""
      });
    }
  }, [note]);

  const handleChange = (e) => {
    setEditedNote({...editedNote, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    onSave(note._id, editedNote.title, editedNote.description, editedNote.tag);
  };


  return (
    <div className="modal fade show" style={{display: "block", backgroundColor: "rgba(0,0,0,0.5)"}} onClick={onCancel}>
      <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Edit Note</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={editedNote.title}
                  onChange={handleChange}
                  placeholder="Enter note title"
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="4"
                  value={editedNote.description}
                  onChange={handleChange}
                  placeholder="Write your note here..."
                ></textarea>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Tag</label>
                <input
                  type="text"
                  className="form-control"
                  name="tag"
                  value={editedNote.tag}
                  onChange={handleChange}
                  placeholder="e.g. Personal, Work, Ideas"
                />
              </div>
            </form>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditNoteBox
