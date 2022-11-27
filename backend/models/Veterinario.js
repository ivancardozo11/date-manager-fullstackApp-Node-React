import mongoose from 'mongoose'

const veterinarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null,
    },
    token:{
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const Veterinario = mongoose.model("Veterianio", veterinarioSchema);

export default Veterinario;