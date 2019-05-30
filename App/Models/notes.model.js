const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({  // Creating a schema as per user requirements.
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);