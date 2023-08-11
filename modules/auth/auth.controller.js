import userModel from "../../DB/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signUp = async (req, res, next) => {
    const { name, email, password } = req.body
    const exist = await userModel.findOne({ email })
    if (exist) return res.json({ message: 'email is exist' })
    const passH = bcrypt.hashSync(password, +process.env.SALT_ROUND)
    const nUser = new userModel({ name, email, password: passH })
    const user =await nUser.save()
    return res.json({ message: 'success'})
}



export const logIn=async(req,res,next)=>{
    const {email,password}=req.body
    const user=await userModel.findOne({email})
    if(!user) return res.json({message:'email or password Invalid'})
    const check=bcrypt.compareSync(password,user.password)
    if(!check) return res.json({message:'email or password Invalid'})
    const token=jwt.sign({id:user._id},process.env.SIGNATURE,{expiresIn:'2d'})
    return res.json({message:'success',token})
}