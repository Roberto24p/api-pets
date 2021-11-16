const { Schema, model } = require('mongoose')


const profileSchema = new Schema({
    names: String,
    date: {
       type: Date,
       default: new Date()
    },
    dateBorn:{
       type: Date
    },
    about: {
       type: String
    },
    city: {
       type: String
    },
    pets: [{
       type: Schema.ObjectId,
       ref: 'Pet'
    }],
    interestedPets: [{
       type: Schema.ObjectId,
       ref: 'Pet'
    }],
    avatar: String
 } 
)


module.exports = new model('Profile', profileSchema)