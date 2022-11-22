import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Editar from "./editar";

export default class EditarProduto extends Editar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public editar(): void {
        console.log(`\nInício da edição do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let produto = this.produtos.find(produto => produto.nome === nome)
        if (produto) {
            let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `)
            produto.preco = preco
            console.log(`\nEdição concluída :)\n`);
        } else {
            console.log(`\nProduto não encontrado :(\n`);
        }
    }
}
