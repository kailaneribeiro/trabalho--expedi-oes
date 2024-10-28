import mongoose from 'mongoose'

const conectDB= async () =>{
    mongoose.connect('mongodb://localhost:27017/Spedicion')
    .then(() => console.log('Connected to MondoDB'))
    .catch((error) => console.log(error))
}

export default conectDB