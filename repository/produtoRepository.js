import Database from "../db/database";


export default class ProdutoRepository{

    #banco;

    constructor(){
        this.#banco = new Database();
    }


    async gravar(entidade){

        let sql = "insert into tb_produto (p_nome, p_descricao, p_imagem) values (?, ?, ?)";
        let entidade = [entidade.nome, entidade.descricao, entidade.imagem];

        let result = await this.#banco.ExecutaComandoLastInserted(sql, valores);

        return result;

    }
}