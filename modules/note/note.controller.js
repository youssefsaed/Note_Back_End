import noteModel from "../../DB/models/note.model.js"
import userModel from "../../DB/models/user.model.js"

export const addNote=async(req,res,next)=>{
    const{title,content,color}=req.body
    const {id}=req.user
    const nNote=new noteModel({title,content,color,createdBy:id})
    const note=await nNote.save()
    note? res.status(201).json({ message: 'success',note }) : res.status(403).json({ message: 'fail' })  
    
} 

export const updateNote=async(req,res,next)=>{
    const {title,content,color}=req.body
    const {_id}=req.user
    const {id}=req.params
    const Note=await noteModel.findOneAndUpdate({_id:id,createdBy:_id},{title,content,color},{new:true})
    Note? res.status(200).json({ message: 'success',Note }) : res.status(403).json({ message: 'fail' })
     
}

export const deletNote=async(req,res,next)=>{
    const {_id}=req.user
    const {id}=req.params
    const deleted=await noteModel.findOneAndDelete({_id:id,createdBy:_id})
    deleted?res.status(200).json({message:"success"}):res.status(403).json({message:"fail"})
}

export const getNote=async(req,res,next)=>{
    const {_id}=req.user
  const Notes= await noteModel.find({createdBy:_id})
  res.status(200).json({message:"success",Notes})
}