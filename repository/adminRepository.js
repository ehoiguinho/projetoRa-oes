import Database from "../db/database.js";


export default class AdminRepository{

    #banco;

    constructor(){
        this.#banco = new Database();
    }


    async gravar(entidade){

        let sql = "insert into tb_admin (ad_nome, ad_email, ad_senha) values (?, ?, ?)";
        let valores = [entidade.nome, entidade.email, entidade.senha];

        let result = await this.#banco.ExecutaComandoLastInserted(sql, valores);

        return result;

    }

    
}