import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

import CadastroCliente from "../cliente/cadastroCliente";
import ListagemClientes from "../cliente/listagemCliente";
import EditarCliente from "../cliente/editarCliente";
import ExcluirCliente from "../cliente/excluirCliente";

import CadastroProduto from "../produto/cadastroProduto";
import ListagemProdutos from "../produto/listagemProduto";
import EditarProduto from "../produto/editarProduto";
import ExcluirProduto from "../produto/excluirProduto";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);

    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar cliente`);
    console.log(`4 - Excluir cliente\n`);
    
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar produto`);
    console.log(`8 - Excluir produto\n`);

    console.log(`9 - Listar 10 clientes que mais consumiram em quantidade`);
    console.log(`10 - Listar clientes por gênero`);
    console.log(`11 - Listagem geral dos serviços ou produtos mais consumidos`);
    console.log(`12 - Listar os serviços ou produros mais consumidos por gênero`);
    console.log(`13 - Listar os 10 clientes que menos consumiram produtos`);
    console.log(`14 - Listar os 5 clientes que mais consumiram em valor\n`);    

    console.log(`15 - Cadastrar consumo de produto `)
    
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listarTodos()
            break;

        case 3:
            let editar = new EditarCliente(empresa.getClientes)
            editar.editar()
            break;

        case 4:
            let excluir = new ExcluirCliente(empresa.getClientes)
            excluir.excluir()
            break;

        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;

        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listarTodos()
            break;

        case 7:
            let editarProduto = new EditarProduto(empresa.getProdutos)
            editarProduto.editar()
            break;

        case 8:
            let excluirProduto = new ExcluirProduto(empresa.getProdutos)
            excluirProduto.excluir()
            break;

        case 9:
            // Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
            let listagem9 = new ListagemClientes(empresa.getClientes)
            listagem9.listagem9()
            break;

        case 10:
            // Listagem dos clientes por gênero
            let listagem10 = new ListagemClientes(empresa.getClientes)
            listagem10.listagem10()
            break;

        case 11:
            // Listagem geral dos serviços ou produtos mais consumidos
            let listagem11 = new ListagemClientes(empresa.getClientes)
            listagem11.listagem11()
            break;

        case 12:
            // Listar os serviços ou produros mais consumidos por gênero
            let listagem12 = new ListagemClientes(empresa.getClientes)
            listagem12.listagem12()
            break;

        case 13:
            // Listar os 10 clientes que menos consumiram
            let listagem13 = new ListagemClientes(empresa.getClientes)
            listagem13.listagem13()
            break;

        case 14:
            // Listar os 5 clientes que mais consumiram em valor
            let listagem14 = new ListagemClientes(empresa.getClientes)
            listagem14.listagem14()
            break;

        case 15:
            console.log(`Cadastro de consumo de produto`);
            let cpf = entrada.receberTexto(`Por favor, digite o CPF do cliente: `)
            let cliente = empresa.getClientes.find(cliente => cliente.getCpf.getValor == cpf);
            if (cliente) {
                let codigo = entrada.receberTexto(`Por favor, digite o nome do produto: `)
                let produto = empresa.getProdutos.find(produto => produto.nome == codigo);
                if (produto) {
                    cliente.adicionarProduto(produto)
                    console.log(`Produto adicionado com sucesso!`);
                } else {
                    console.log(`Produto não encontrado`)
                    break
                }
            } else {
                console.log(`Cliente não encontrado`)
                break
            }
            break;
            
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}