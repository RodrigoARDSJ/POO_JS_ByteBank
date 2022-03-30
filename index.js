import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Rodrigo", 5454545454, 7465464);
const corrente1 = new ContaCorrente(101055, cliente1)
const poupanca1 = new ContaPoupanca(0, cliente1, 101055)

console.log(poupanca1, corrente1);
 