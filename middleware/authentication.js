import jwt from "jsonwebtoken"
import userModel from "../DB/models/user.model.js"
import asyncHandeller from "../utils/errorHandlling.js"

const Auth = () => {
    return asyncHandeller(async (req, res, next) => {
        const { authorization } = req.headers
        if (!authorization) return res.json({ message: "token is provided" })
        if (!authorization.startsWith(process.env.BEARER)) return res.json({ message: "Bearer is provided" })
        const token = authorization.split('__')[1]
        const decode = jwt.verify(token, process.env.SIGNATURE)
        if (!decode?.id) return res.json({ message: "payload is provided" })
        const user = await userModel.findById(decode.id)
        if (!user) return res.json({ message: "user not found" })
        req.user = user
        next()
    })
}

export default Auth