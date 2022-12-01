import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
conectarDB();

const PORT = process.env.PORT || 4000
app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running and working on port ${PORT} :🚀🚀🚀🚀`)
});