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

    async alterar(entidadeAtualizada){
        let sql = "update tb_produto set p_nome = ?, p_descricao, p_imagem where p_id = ?";
        let valores = [entidadeAtualizada.nome, entidadeAtualizada.descricao, entidadeAtualizada.imagem, entidadeAtualizada.id];

        let result = await this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async deletar(id){
        let sql = "delete from tb_produto where p_id = ?";
        let  valores = [id];
        let result = await this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}