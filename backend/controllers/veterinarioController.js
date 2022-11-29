import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) =>{

    const { email } = req.body;

    const existeUsuario = await Veterinario.findOne({ email });
    if (existeUsuario) {
       const error = new Error('Usuario ya registrado');
       return res.status(400).json({ msg: error.message });
    }
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

const confirmar = async (req, res) =>{
    const { token } = req.params;

    const usuarioConfirmar = await Veterinario.findOne({ token });
    console.log(usuarioConfirmar)
    if (!usuarioConfirmar) {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }
    try {

        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({msg: 'Confirmando cuenta...'});
    } catch (error) {
        console.log(error);
    }
}

const autenticar = (req, res)=>{
    
    res.json({msg: "Autenticando"});
};

export{
    registrar,
    perfil,
    confirmar,
    autenticar
}