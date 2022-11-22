import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Excluir from "./excluir";

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        console.log(`\nInício da exclusão do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let produto = this.produtos.find(produto => produto.nome === nome)
        if (produto) {
            this.produtos.splice(this.produtos.indexOf(produto), 1)
            console.log(`\nExclusão concluída :)\n`);
        } else {
            console.log(`\nProduto não encontrado :(\n`);
        }
    }
}
