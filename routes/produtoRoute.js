import express from 'express'
import ProdutoController from '../controller/produtoController';
const router = express.Router();

let ctrl = new ProdutoController();


router.post("/", (req, res) =>{

    //#swagger.tags = ['Produto']
    //#swagger.summary = "Realiza o cadastro de um produto"

    ctrl.cadastrar(req, res);
})

export default router;