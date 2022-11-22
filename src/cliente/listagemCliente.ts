import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemCliente extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listarTodos(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listagem9(): void {
        console.log(`\nListagem dos 10 clientes que mais consumiram em quantidade`);
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return b.getQuantidade - a.getQuantidade
        })
        clientesOrdenados.forEach((cliente, indice) => {
            if (indice < 10) {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Quantidade: ` + cliente.getQuantidade);
                console.log(`--------------------------------------`);
            }
        });
        console.log(`\n`);
    }
    public listagem10(): void {
        console.log(`\nListagem dos clientes por gênero`);
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return a.genero.localeCompare(b.genero)
        })
        let clientesFemininos = clientesOrdenados.filter(cliente => {
            return cliente.genero == "feminino"
        })
        let clientesMasculinos = clientesOrdenados.filter(cliente => {
            return cliente.genero == "masculino"
        })
        let clientesNaoInformados = clientesOrdenados.filter(cliente => {
            return cliente.genero == "não informado"
        })
        console.log(`\nClientes femininos:`);
        clientesFemininos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        })
        console.log(`\nClientes masculinos:`);
        clientesMasculinos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        })
        console.log(`\nClientes não informados:`);
        clientesNaoInformados.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        })
    }

    public listagem11(): void {
        console.log(`Listagem geral dos produtos mais consumidos`);
        
        
    }

    public listagem12(): void {
        console.log(`Listagem dos 10 clientes que menos consumiram em quantidade`);
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return a.getQuantidade - b.getQuantidade
        })
        clientesOrdenados.forEach((cliente, indice) => {
            if (indice < 10) {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Quantidade: ` + cliente.getQuantidade);
                console.log(`--------------------------------------`);
            }
        })
        
    }

    public listagem13(): void {
        console.log(`Listagem dos 5 clientes que mais consumiram em valor`);
        // ordenar os clientes por valor total de consumo
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return b.getValorTotal() - a.getValorTotal()
        })
        clientesOrdenados.forEach((cliente, indice) => {
            if (indice < 5) {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`Valor total: ` + cliente.getValorTotal());
                console.log(`--------------------------------------`);
            }
        })
    }

}