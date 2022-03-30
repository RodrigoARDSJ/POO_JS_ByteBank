import {
    Cliente
} from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }    
}