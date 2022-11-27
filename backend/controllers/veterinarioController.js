const registrar = (req, res) =>{
    const {email, password, nombre } = req.body;

    console.log(email);
    console.log(password);
    console.log(nombre);

    res.json({ msg: "Registrando usuarios.."});
};

const perfil = (req, res) =>{
    res.json({ msg: "Mostrando perfil de usuarios.." });
};

export{
    registrar,
    perfil
}