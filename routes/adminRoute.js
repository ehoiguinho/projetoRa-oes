import express from 'express';
import AdminController from '../controller/adminController';
const router = express.Router();

let ctrl = new AdminController();

router.post("/", (req, res) =>{


    ctrl.cadastrar(req, res);
})