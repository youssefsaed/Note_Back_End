import { Router } from "express";
import * as authController from './auth.controller.js'
import asyncHandeller from "../../utils/errorHandlling.js";
import { logInSchema, signUpSchema } from "./auth.validation.js";
import validation from "../../middleware/validation.js";

const router=Router()



router.post('/signUp',validation(signUpSchema),asyncHandeller(authController.signUp))
router.post('/logIn',validation(logInSchema),asyncHandeller(authController.logIn))







export default router