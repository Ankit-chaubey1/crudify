const express = require('express');
const router = express.Router();

// Temporary test route
const {createNote,readNote,readNotebyid,updateNote,deleteNote}=require('../controllers/NoteController.js');
router.post('/create', createNote);
router.get('/', readNote);
router.get('/:id', readNotebyid);
router.put('/update/:id', updateNote);
router.delete('/delete/:id', deleteNote);


module.exports = router;