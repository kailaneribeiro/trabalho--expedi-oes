import {Schema, model} from 'mongoose'

const expeditionSchema = new Schema({
    location:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
    },
    participants:{
        type: Schema.Types.ObjectId,
        ref: 'Explorer',
        required: true,
    },
    speciesFound:{
        type: Schema.Types.ObjectId,
        ref: 'Species',
        required: true,
    }
    
})


export default model ('Expedition', expeditionSchema)