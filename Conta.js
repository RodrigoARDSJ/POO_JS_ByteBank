export class Conta {

    constructor(tipo, saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {

            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    
    
    sacar(valor) {
        let taxa = 1;
        if (this._tipo == "corrente") {
            taxa = 1 * 1;
        }

        if (this._tipo == "empresarial") {
            taxa = 1.15;
        }
        const valorSacado = taxa * valor;
        if (this._saldo > valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        if (this._tipo == "salario") {
            return;
        }
        const valorSacar = this.sacar(valor);
        conta.depositar(valorSacar);
    }
}