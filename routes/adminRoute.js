import express from 'express';
import AdminController from '../controller/adminController.js';
const router = express.Router();

let ctrl = new AdminController();

router.post("/", (req, res) =>{

    //#swagger.tags = ['Administrador']
    //#swagger.summary = "Realiza o cadastro de administrador"

    ctrl.cadastrar(req, res);
})

export default router;