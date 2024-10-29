import mongoose from 'mongoose'

const conectDB= async () =>{
    mongoose.connect(`${process.env.URI}`)
    .then(() => console.log('Connected to MondoDB'))
    .catch((error) => console.log(error))
}

export default conectDB