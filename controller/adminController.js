import adminEntity from "../entities/admin.js";
import AdminRepository from "../repository/adminRepository.js";


export default class AdminController{

    #repo;
    constructor(){
        this.#repo = new AdminRepository();
    }

    async cadastrar(req, res){

        try{
        let {nome, email, senha} = req.body;
        let entidade = new adminEntity(0, nome, email, senha);
        if(entidade.validar()){
            let result = await this.#repo.gravar(entidade);

            return res.status(201).json(entidade)
        }
        else {
            return res.status(400).json({msg: "Parâmetros incorretos. Por favor confira os dados do administrador!"});
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({msg: "Erro ao processar requisição!"});
    }

}
}