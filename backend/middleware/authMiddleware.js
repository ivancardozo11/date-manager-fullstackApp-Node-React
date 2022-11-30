const checkAuth = (req, res, next) =>{
if (req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')) {
    console.log('Si tiene el token con bearer');
}else{
    console.log('No no hay token o bearer');
}

const error = new Error("Token no Valido o inexistente");
res.status(403).json({msg: error.message});

next();
};

export default checkAuth