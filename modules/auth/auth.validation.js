import Joi from 'joi'

export const signUpSchema = {
    body: Joi.object().required().keys({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('[A-Za-z0-9]{5,20}')).required()
    })
}

export const logInSchema={
    body:Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('[A-Za-z0-9]{5,20}')).required()
    })
}