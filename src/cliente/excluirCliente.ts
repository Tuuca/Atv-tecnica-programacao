import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Excluir from "./excluir";

export default class ExcluirCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nInício da exclusão do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)
        if (cliente) {
            let indice = this.clientes.indexOf(cliente)
            this.clientes.splice(indice, 1)
            console.log(`\nExclusão concluída :)\n`);
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }
}