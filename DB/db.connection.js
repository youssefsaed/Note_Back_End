import mongoose from "mongoose";

const dbConnection = () => mongoose.connect(process.env.URL)
    .then(() => console.log('dbConnection.....'))
    .catch((err) => console.log({ DbError: err }))




export default dbConnection