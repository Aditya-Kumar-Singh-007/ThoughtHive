// ============================================================================
// 📘 NOTES ROUTER
// File: routes/notes.js
// Description: Handles all operations related to user notes — CRUD endpoints.
// Access: All routes require authentication (fetchUser middleware)
// ============================================================================

const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");


// ============================================================================
// 🟢 SECTION 1: FETCH ALL NOTES
// Route: GET "/api/notes/getallnotes"
// Purpose: Fetch all notes belonging to the logged-in user
// Access: Private (Authentication required)
// ============================================================================

router.get("/getallnotes", fetchUser, async (req, res) => {
  try {
    // 🧩 Fetch notes for the current user using their ID from middleware
    const notes = await Notes.find({ user: req.user.id });

    // ✅ Send all fetched notes as JSON
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// ============================================================================
// 🟡 SECTION 2: ADD A NEW NOTE
// Route: POST "/api/notes/addnote"
// Purpose: Create and store a new note for the logged-in user
// Access: Private (Authentication required)
// ============================================================================

router.post(
  "/addnote",
  [
    // --- 🧾 SUBSECTION: Validation Rules ---
    body("title", "Title must have at least 3 characters").isLength({ min: 3 }),
    body("description", "Description must have at least 5 characters").isLength({ min: 5 }),
  ],
  fetchUser,
  async (req, res) => {
    // --- 🧩 SUBSECTION: Validation Handling ---
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
      // --- 🧩 SUBSECTION: Extract Data and Create Note ---
      const { title, description, tags, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tags: tags || tag,
        user: req.user.id,
      });

      // --- 🧩 SUBSECTION: Save Note to Database ---
      const savedNote = await note.save();

      res.status(201).json({ Message: "Note saved!", note: savedNote });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


// ============================================================================
// 🔵 SECTION 3: UPDATE EXISTING NOTE
// Route: PUT "/api/notes/updatenote/:id"
// Purpose: Update title, description, or tag of an existing note
// Access: Private (Authentication required)
// ============================================================================

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    // --- 🧩 SUBSECTION: Extract fields to update ---
    const { title, description, tags, tag } = req.body;
    const newNote = {};

    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tags || tag) newNote.tags = tags || tag;

    // --- 🧩 SUBSECTION: Find the note by ID ---
    const noteId = req.params.id;
    const note = await Notes.findById(noteId);

    if (!note) {
      return res.status(404).send("No Data Found!");
    }

    // --- 🧩 SUBSECTION: Verify ownership ---
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Access not allowed!");
    }

    // --- 🧩 SUBSECTION: Perform update operation ---
    const updatedNote = await Notes.findByIdAndUpdate(
      noteId,
      { $set: newNote },
      { new: true }
    );

    res.status(200).json({ message: "Note Updated Successfully", note: updatedNote });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// ============================================================================
// 🔴 SECTION 4: DELETE A NOTE
// Route: DELETE "/api/notes/deletenote/:id"
// Purpose: Permanently delete a user’s note by ID
// Access: Private (Authentication required)
// ============================================================================

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    // --- 🧩 SUBSECTION: Find the note by ID ---
    const noteId = req.params.id;
    const note = await Notes.findById(noteId);

    if (!note) {
      return res.status(404).send("No Data Found!");
    }

    // --- 🧩 SUBSECTION: Verify ownership ---
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Access not allowed!");
    }

    // --- 🧩 SUBSECTION: Delete note ---
    const deletedNote = await Notes.findByIdAndDelete(noteId);

    res.status(200).json({ message: "Note deleted!", deletedNote: deletedNote });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// ============================================================================
// 📦 EXPORT ROUTER
// ============================================================================
module.exports = router;
