import { ContaCorrente } from "./ContaCorrente.js";

export class ContaPoupanca {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
}