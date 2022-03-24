const monggose = require('mongoose')

const TaskSchema = new monggose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'O nome é um parametro obrigatório'],
        maxlength: [20, 'O nome não pode ter mais de vinte caracteres']
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = monggose.model('Task', TaskSchema)