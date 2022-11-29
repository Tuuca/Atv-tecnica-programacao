import Cliente from "./cliente"
import Produto from "./produto"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    constructor(){
        this.clientes = []
        this.produtos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
}