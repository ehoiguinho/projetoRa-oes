import ProdutoEntity from "../entities/produto";
import ProdutoRepository from "../repository/produtoRepository";


export default class ProdutoController{

    #repo;

    constructor(){
        this.#repo = new ProdutoRepository();
    }


    async cadastrar(req, res){
        try{
            let {id, nome, descricao, imagem} = req.body;
            let entidade = new ProdutoEntity();
            if(entidade){
                let result = await this.#repo.gravar(entidade);
                return res.status(201).json(entidade);
            }
            else{
                return res.status(400).json({msg: "Erro ao cadastrar produto, verifique os campos e tente novamente!"});
            }
        }
        catch(error){
            console.error(error);
            return res.status(500).json({msg: "Erro ao processar requisição"});
        }
    }

    async alterar(req, res){
        try{

        }
        catch(error){
            console.error(error);
            return res.status(500).json({msg: "Erro ao processar requisição"});
        }
    }

    async excluir(req, res){
        try{

        }
        catch(error){
            console.error(error);
            return res.status(500).json({msg: "Erro ao processar requisiçao"});
        }
    }
}