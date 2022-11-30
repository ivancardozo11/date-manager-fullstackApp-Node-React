import express from 'express'
const router = express.Router();
import {
    agregarPaciente,
    obtenerPacientes,
 } from '../controllers/PacienteController';

router.route('/')
.post(agregarPaciente)
.get(obtenerPacientes);

export default router;