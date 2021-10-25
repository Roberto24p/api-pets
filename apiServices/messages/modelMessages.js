const { Schema, model} = require('mongoose')

const messageSchema = new Schema({
    from: {
        type: Schema.ObjectId,
        ref: 'Profile'
    },
    to: {
        type: Schema.ObjectId,
        ref: 'Profile'
    },
    pet: {
        type: Schema.ObjectId,
        ref: 'Pet'
    },
    message: String

})

module.exports = new model('Message', messageSchema)