import Joi from 'joi';

export const addNoteSchema={
    body:Joi.object().keys({
        title:Joi.string().max(10).required(),
        content:Joi.string().min(3).max(50).required(),
        color:Joi.string().valid('bg-orange-500', 'bg-red-500', 'bg-amber-500', 'bg-lime-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-blue-500', 'bg-indigo-500')
    }),
}

export const updateNoteSchema={
    body:Joi.object().keys({
        title:Joi.string().max(10),
        content:Joi.string().min(3).max(50),
        color:Joi.string().valid('bg-orange-500', 'bg-red-500', 'bg-amber-500', 'bg-lime-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-blue-500', 'bg-indigo-500')
    }),
    params:Joi.object().required().keys({
        id:Joi.string().hex().length(24).required()
    })
}

export const deleteNoteScehma={
    params:Joi.object().required().keys({
        id:Joi.string().hex().length(24).required()
    })
}