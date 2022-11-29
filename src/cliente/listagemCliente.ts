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
            return cliente.genero != "masculino" && cliente.genero != "feminino"
        })
        console.log(`\nClientes femininos:`);
        clientesFemininos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        })
        console.log(`\nClientes masculinos:`);
        clientesMasculinos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        })
        console.log(`\nClientes não informados:`);
        clientesNaoInformados.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        })
    }


    public listagem11(): void {
        console.log(`Listagem geral dos produtos mais consumidos`);
        let produtosConsumidos: Array<string> = []
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                produtosConsumidos.push(produto.nome)
            })
        
        })
        let produtosConsumidosOrdenados = produtosConsumidos.sort((a, b) => {
            return a.localeCompare(b)
        })
        let produtosUnicos = produtosConsumidosOrdenados.filter((produto, indice) => {
            return produtosConsumidosOrdenados.indexOf(produto) == indice
        })
        let produtoQuantidade: Array<number> = []
        produtosUnicos.forEach(produto => {
            produtoQuantidade.push(produtosConsumidosOrdenados.filter(produto2 => {
                return produto2 == produto
            }).length)
        })
        let produtoOrdenados = produtoQuantidade.sort((a, b) => {
            return b - a
        })
        let produtoFinal = produtoOrdenados.filter((produto, indice) => {
            return produtoOrdenados.indexOf(produto) == indice
        }
        )
        produtoFinal.forEach((produto, indice) => {
            console.log(`Produto: ` + produtosUnicos[indice]);
            console.log(`Quantidade: ` + produto);
            console.log(`--------------------------------------`);
        })
    }


    public listagem12(): void {
        console.log(`Listar os serviços ou produros mais consumidos por gênero`);
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return a.genero.localeCompare(b.genero)
        })
        let clientesFemininos = clientesOrdenados.filter(cliente => {
            return cliente.genero == "feminino"
        })
        let clientesMasculinos = clientesOrdenados.filter(cliente => {
            return cliente.genero == "masculino"
        })
        console.log(`\nProdutos mais consumidos pelo gênero feminino:`);
        let produtosConsumidosFeminino: Array<string> = []
        clientesFemininos.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                produtosConsumidosFeminino.push(produto.nome)
            })
        })
        let produtosOrdenadosFeminino = produtosConsumidosFeminino.sort((a, b) => {
            return a.localeCompare(b)
        })
        let produtosUnicosFeminino = produtosOrdenadosFeminino.filter((produto, indice) => {
            return produtosOrdenadosFeminino.indexOf(produto) == indice
        })
        let produtosQuantidadeFeminino: Array<number> = []
        produtosUnicosFeminino.forEach(produto => {
            let quantidade = 0
            produtosOrdenadosFeminino.forEach(produtoOrdenado => {
                if (produto == produtoOrdenado) {
                    quantidade++
                }
            })
            produtosQuantidadeFeminino.push(quantidade)
        })
        let produtosQuantidadeOrdenadosFeminino = produtosQuantidadeFeminino.sort((a, b) => {
            return b - a
        })
        let produtosMaisConsumidosFeminino: Array<string> = []
        produtosQuantidadeOrdenadosFeminino.forEach((quantidade, indice) => {
            produtosMaisConsumidosFeminino.push(produtosUnicosFeminino[indice])
        })
        produtosMaisConsumidosFeminino.forEach((produto) => {
            console.log(`Nome: ` + produto);
            console.log(`Consumido por: ` + produtosQuantidadeOrdenadosFeminino[produtosMaisConsumidosFeminino.indexOf(produto)] + ` clientes`);
            console.log(`--------------------------------------`);
        })
        console.log(`\nProdutos mais consumidos pelo gênero masculino:`);
        let produtosConsumidosMasculino: Array<string> = []
        clientesMasculinos.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                produtosConsumidosMasculino.push(produto.nome)
            })
        })
        let produtosOrdenadosMasculino = produtosConsumidosMasculino.sort((a, b) => {
            return a.localeCompare(b)
        })
        let produtosUnicosMasculino = produtosOrdenadosMasculino.filter((produto, indice) => {
            return produtosOrdenadosMasculino.indexOf(produto) == indice
        })
        let produtosQuantidadeMasculino: Array<number> = []
        produtosUnicosMasculino.forEach(produto => {
            let quantidade = 0
            produtosOrdenadosMasculino.forEach(produtoOrdenado => {
                if (produto == produtoOrdenado) {
                    quantidade++
                }
            })
            produtosQuantidadeMasculino.push(quantidade)
        })
        let produtosQuantidadeOrdenadosMasculino = produtosQuantidadeMasculino.sort((a, b) => {
            return b - a
        })
        let produtosMaisConsumidosMasculino: Array<string> = []
        produtosQuantidadeOrdenadosMasculino.forEach((quantidade, indice) => {
            produtosMaisConsumidosMasculino.push(produtosUnicosMasculino[indice])
        })
        produtosMaisConsumidosMasculino.forEach((produto) => {
            console.log(`Nome: ` + produto);
            console.log(`Consumido por: ` + produtosQuantidadeOrdenadosMasculino[produtosMaisConsumidosMasculino.indexOf(produto)] + ` clientes`);
            console.log(`--------------------------------------`);
        })
        
    }


    public listagem13(): void {
        console.log(`Listar os 10 clientes que menos consumiram produtos`);
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return a.getProdutosConsumidos.length - b.getProdutosConsumidos.length
        })
        let clientesMenosConsumidores: Array<Cliente> = []
        clientesOrdenados.forEach((cliente, indice) => {
            if (indice < 10) {
                clientesMenosConsumidores.push(cliente)
            }
        })
        clientesMenosConsumidores.forEach((cliente) => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Consumiu: ` + cliente.getProdutosConsumidos.length + ` produtos`);
            console.log(`--------------------------------------`);
        })
    }


    public listagem14(): void {
        console.log(`Listagem dos 5 clientes que mais consumiram em valor`);
        // LISTAGEM DOS 5 PRIMEIROS CLIENTES QUE MAIS CONSUMIRAM BASEADO DO PRECO DE QUANTO CADA UM GASTOU
        let clientesOrdenados = this.clientes.sort((a, b) => {
            return b.getValorTotal() - a.getValorTotal()
        })
        let clientesMaisConsumidores: Array<Cliente> = []
        clientesOrdenados.forEach((cliente, indice) => {
            if (indice < 5) {
                clientesMaisConsumidores.push(cliente)
            }
        })
        clientesMaisConsumidores.forEach((cliente) => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Valor total: ` + cliente.getValorTotal());
            console.log(`--------------------------------------`);
        })

    }

}