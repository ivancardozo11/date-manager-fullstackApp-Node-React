import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";

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
    const { veterinario } = req;

    res.json({perfil: veterinario});
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
        res.json({msg: 'Usuario confirmado correctamente'});
    } catch (error) {
        console.log(error);
    }
}

const autenticar = async (req, res)=>{
    const { email, password } = req.body;

    const usuario = await Veterinario.findOne({email})

    if (!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({msg: error.message});
    }

    if (!usuario.confirmado) {
        const error = new Error('Tu cuenta no ha sido confirmada');
        return res.status(403).json({msg: error.message});
    }


    if (await usuario.comprobarPassword(password)) {
       res.json({token: generarJWT(usuario.id)});
    }else{
        const error = new Error("El password es incorrecto");
        return res.status(403).json({ msg: error.message });
    }
};

const olvidePassword = async (req, res)=>{
    const { email }= req.body;

    const existeVeterinario = await Veterinario.findOne({email})

    if (!existeVeterinario) {
        const error = new Error('El usuario no existe');
        return res.status(400).json({msg: error.message});
    }

    try {
        existeVeterinario.token = generarId();
        await existeVeterinario.save();
        res.json({msg: 'Hemos enviado un mail con las instrucciones'});
        
    } catch (error) {
        console.log(error);
        
    }
    console.log(email);
}
const comprobarToken = async (req, res)=>{
    const { token } = req.params

    const tokenValido = await Veterinario.findOne({token});

    if (tokenValido) {
        res.json({msg: "Token válido y el usuario existe"});
    }else{
        const error = new Error('Token no valido');
        return res.status(400).json({msg: error.message});
    }

    console.log(token)
}
const nuevoPassword = async(req, res)=>{
    const { token } = req.params;
    console.log(token);
    const {password} = req.body;

    const veterinario = await Veterinario.findOne({token});

    if (!veterinario) {
        const error = new Error("Hubo un error");
        return res.status(400).json({msg: error.message});
    }

    try {
        veterinario.token = null;
        veterinario.password = password;
        await veterinario.save();
        res.json({msg: 'Password modificado correctamente'});
        console.log(veterinario);
    } catch (error) {
        console.log(error);
    }
};

export{
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
}