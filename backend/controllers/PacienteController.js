import Paciente from "../models/Paciente.js"

const agregarPaciente = (req, res) =>{
    const paciente = new Paciente(req.body);
    console.log(paciente);

    try {
        
    } catch (error) {
        console.log(error);
        
    }
};
const obtenerPacientes = (req, res)=>{
    console.log(req.body);
};

export{
    agregarPaciente, 
    obtenerPacientes
};