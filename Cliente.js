export class Cliente {
    constructor(nome, cpf, rg) {
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
    
    get cpf() {
        return this._cpf;
    }
}