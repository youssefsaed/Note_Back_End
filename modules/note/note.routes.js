import { Router } from "express";
import * as noteControllr from './note.controller.js'
import Auth from "../../middleware/authentication.js";
import asyncHandeller from "../../utils/errorHandlling.js";
import validation from "../../middleware/validation.js";
import { addNoteSchema, deleteNoteScehma, updateNoteSchema } from "./note.validation.js";
const router=Router()




router.post('/addNote',validation(addNoteSchema),Auth(),asyncHandeller(noteControllr.addNote))
router.put('/updateNote/:id',validation(updateNoteSchema),Auth(),asyncHandeller(noteControllr.updateNote))
router.delete('/deleteNote/:id',validation(deleteNoteScehma),Auth(),asyncHandeller(noteControllr.deletNote))
router.get('/getNote',Auth(),asyncHandeller(noteControllr.getNote))





export default router