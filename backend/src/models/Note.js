import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            requried: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // mongodb will give you default created at
);

const Note = mongoose.model("Note", noteSchema);

export default Note;