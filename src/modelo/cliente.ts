import CPF from "./cpf"
import Produto from "./produto"

export default class Cliente {
    public nome: string
    public genero: string
    private cpf: CPF
    private dataCadastro: Date
    private produtosConsumidos: Array<Produto>
    constructor(nome: string, genero: string, cpf: CPF) {
        this.nome = nome
        this.genero = genero
        this.cpf = cpf
        this.dataCadastro = new Date()
        this.produtosConsumidos = []
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public adicionarProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto)
    }

    public get getQuantidade(): number {
        return this.produtosConsumidos.length
    }

    public getValorTotal(): number {
        let valorTotal: number = 0
        this.produtosConsumidos.forEach(produto => {
            valorTotal += produto.preco
        })
        return valorTotal
    }
}