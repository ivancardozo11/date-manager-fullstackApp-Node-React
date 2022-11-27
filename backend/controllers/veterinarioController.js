import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) =>{
    // const {email, password, nombre } = req.body;
    try {
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();
        res.json(veterinarioGuardado);
    } catch (error) {
        console.log(error);
    }
};

const perfil = (req, res) =>{
    res.json({ msg: "Mostrando perfil de usuarios.." });
};

export{
    registrar,
    perfil
}