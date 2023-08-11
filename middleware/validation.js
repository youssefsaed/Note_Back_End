const validation = (Schema) => {
    return (req, res, next) => {
        const requstKeys = ['body', 'query', 'params', 'headers', 'file', 'files']
        let validationErrorArr = []
        requstKeys.forEach(key => {
            if (Schema[key]) {
                const validationResualt = Schema[key].validate(req[key], { abortEarly: false })
                if (validationResualt?.error?.details) {
                    validationErrorArr.push(validationResualt.error.details)
                }
            }
        });
        if (validationErrorArr.length) return res.json({ message: validationErrorArr })
        return next()
    }
}

export default validation