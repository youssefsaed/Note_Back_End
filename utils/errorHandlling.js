export const asyncHandeller = (fn) => {
    return (req, res, next) => {
        fn(req, res, next)
            .catch(err => res.json({ message: 'catch error', errorMessage: err.message, stack: err.stack }))
    }
}

export default asyncHandeller


