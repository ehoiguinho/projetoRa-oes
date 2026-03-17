

export default class ProdutoEntity{
    #id;
    #nome;
    #descricao;
    #imagem;

    constructor(id, nome, descricao, imagem){
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#imagem = imagem;

    }

    get id(){
        return this.#id;
    }
    set id(values){
        this.#id = values;
    }

    get nome(){
        return this.#nome;
    }
    set nome(values){
        this.#nome = values;
    }

    get descricao(){
        return this.#descricao;
    }
    set descricao(values){
        this.#descricao = values;
    }

    get imagem(){
        return this.#imagem;
    }
    set imagem(values){
        this.#imagem = values;
    }


    toJSON(){
        return{
            id: this.#id,
            nome: this.#nome,
            descricao: this.#descricao,
            imagem: this.#imagem
        }
    }
}