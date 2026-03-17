

export default class adminEntity{
    #id;
    #nome;
    #email;
    #senha;


    constructor(id, nome, email, senha){
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }

    get id(){
        return this.#id;
    }
    set id(values){
        this.#id = values;
    }

    get nome(){
        return this.#id;
    }
    set nome(values){
        this.#nome = values;
    }

    get email(){
        return this.#email;
    }
    set email(values){
        this.#email = values;
    }

    get senha(){
        return this.#senha;
    }
    set senha(values){
        this.#senha = values;
    }


    toJSON(){
        return{
            id: this.#id,
            nome: this.#nome,
            email: this.#email,
            senha: this.#senha
        }
    }
}