import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    color: {
        type: String,
        default: 'bg-indigo-500'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{timestamps:true})


const noteModel = mongoose.model('note', noteSchema)


export default noteModel



