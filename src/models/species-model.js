import {Schema, model} from 'mongoose'

const speciesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    discoveryLocation:{
        type: String,
        required: true
    },
    rarity:{
        type: Number,
        required: true
    },
    documented:{
        type: Boolean,
        required: false
    }
    
})


export default model ('Species', speciesSchema)