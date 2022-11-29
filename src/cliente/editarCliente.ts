import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Editar from "./editar";

export default class EditarCliente extends Editar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public editar(): void {
        console.log(`\nInício da edição do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)
        if (cliente) {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
            cliente.nome = nome
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }
}