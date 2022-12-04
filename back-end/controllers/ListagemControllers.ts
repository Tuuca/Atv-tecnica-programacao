import { Cliente } from "../model/cliente";
import { Consumo } from "../model/Consumo";
import { Produtos } from "../model/produtos";
import { Request, Response } from "express";

export class ListagemController {
    async listagemCliente(req: Request, res: Response) {
        // Listagem geral de todos os clientes
        const clientes = await Cliente.findAll();
        return res.json(clientes);
    }
    
    async listagemProduto(req: Request, res: Response) {
        // Listagem geral de todos os produtos
        const produtos = await Produtos.findAll();
        return res.json(produtos);
    }
    async listagem9(req: Request, res: Response) {
        // Listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade.
        const consumos = await Consumo.findAll();
        var todosConsumos :any = [];

        consumos.forEach(consumo => {
            todosConsumos.push(consumo.getDataValue('cpf'));
        });

        todosConsumos.sort((a: any, b: any) => todosConsumos.filter((v: any) => v === a).length - todosConsumos.filter((v: any) => v === b).length)

        var set = new Set(todosConsumos);
        var array = Array.from(set);
        var top10 = array.slice(0, 10);
        console.log(top10.reverse())
        

        return(res.json(top10.reverse()));
        
    }

    async listagem10(req: Request, res: Response) {
        // Listagem de todos os clientes por gênero.
        const clientes = await Cliente.findAll();
        var todosClientes :any = [];
        var masculino :any = [];
        var feminino :any = [];

        // clientes.forEach(cliente => {
        //     if (cliente.getDataValue('genero') == "masculino") {
        //         masculino.push(cliente.getDataValue('nome'));
        //     }
        //     else if (cliente.getDataValue('genero') == "feminino") {
        //         feminino.push(cliente.getDataValue('nome'));
        //     }
        // });
        clientes.forEach(cliente => {
            todosClientes.push({nome: cliente.getDataValue('nome'), genero: cliente.getDataValue('genero')});
        });
        return (res.json(todosClientes));
        }
        
        
    async listagem11(req: Request, res: Response) {
        // Listagem geral dos serviços ou produtos mais consumidos.
        const consumos = await Consumo.findAll();
        var todosConsumos :any = [];

        consumos.forEach(consumo => {
            todosConsumos.push(consumo.getDataValue('nome'));
        });

        todosConsumos.sort((a: any, b: any) => todosConsumos.filter((v: any) => v === a).length - todosConsumos.filter((v: any) => v === b).length)

        var set = new Set(todosConsumos);
        var array = Array.from(set);
        var top10 = array.slice(0, 10);

        return(res.json(top10.reverse()));
    }

    async listagem12(req: Request, res: Response) {
        // Listagem dos serviços ou produtos mais consumidos por gênero.
        const consumos = await Consumo.findAll();
        const clientes = await Cliente.findAll();
        var ConsumosMasculino :any = [];
        var MasculinoOrdenado :any = [];
        var ConsumosFeminino :any = [];
        var FemininoOrdenado :any = [];
        var masculino :any = [];
        var feminino :any = [];

        clientes.forEach(cliente => {
            if (cliente.getDataValue('genero') == "masculino") {
                masculino.push(cliente.getDataValue('cpf'));
            }
            else if (cliente.getDataValue('genero') == "feminino") {
                feminino.push(cliente.getDataValue('cpf'));
            }
        });

        consumos.forEach(consumo => {
            if (masculino.includes(consumo.getDataValue('cpf'))) {
                ConsumosMasculino.push(consumo.getDataValue('nome'));
            }
            else if (feminino.includes(consumo.getDataValue('cpf'))) {
                ConsumosFeminino.push(consumo.getDataValue('nome'));
            }
        });

        MasculinoOrdenado.sort((a: any, b: any) => ConsumosMasculino.filter((v: any) => v === a).length - ConsumosMasculino.filter((v: any) => v === b).length);
        FemininoOrdenado.sort((a: any, b: any) => ConsumosFeminino.filter((v: any) => v === a).length - ConsumosFeminino.filter((v: any) => v === b).length);

        var set = new Set(ConsumosMasculino);
        var array = Array.from(set);

        var set2 = new Set(ConsumosFeminino);
        var array2 = Array.from(set2);

        return (res.json({masculino: array.reverse(), feminino: array2.reverse()}));

    }
    async listagem13(req: Request, res: Response) {
        // Listagem dos 10 clientes que menos consumiram produtos ou serviços.
        const consumos = await Consumo.findAll();
        const clientes = await Cliente.findAll();
        var todosConsumos :any = [];

        consumos.forEach(consumo => {
            todosConsumos.push(consumo.getDataValue('cpf'));
        });

        todosConsumos.sort((a: any, b: any) => todosConsumos.filter((v: any) => v === a).length - todosConsumos.filter((v: any) => v === b).length)

        var set = new Set(todosConsumos);
        var array = Array.from(set);
        var top10 = array.slice(0, 10);

        return(res.json(top10));

    }
    async listagem14(req: Request, res: Response) {
        // Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
        const consumos = await Consumo.findAll();
        const produtos = await Produtos.findAll();
        const clientes = await Cliente.findAll();
        var todosProdutos :any = [];
        var todosClientes :any = [];
        var ProdutoValor :any = [];
        var ClienteOrdenado :any = [];

        produtos.forEach(produto => {
            todosProdutos.push([produto.getDataValue('nome'), produto.getDataValue('valor')]);
        });

        clientes.forEach(cliente => {
            todosClientes.push([cliente.getDataValue('cpf')]);
        });

        consumos.forEach(consumo => {
            const nome = consumo.getDataValue('nome');

            todosProdutos.forEach((produto: any[]) => {
                if (produto[0] == nome) {
                    ProdutoValor.push([consumo.getDataValue('cpf'), produto[1]]);
                }
            });
        });
        ProdutoValor.sort((a: any, b: any) => ProdutoValor.filter((v: any) => v === a).length - ProdutoValor.filter((v: any) => v === b).length)
        
        for (var i = 0; i < ProdutoValor.length; i++) {
            for (var j = i + 1; j < ProdutoValor.length; j++) {
                if (ProdutoValor[i][0] == ProdutoValor[j][0]) {
                    ProdutoValor[i][1] += ProdutoValor[j][1];
                    ProdutoValor.splice(j, 1);
                    j--;
                }
            }
        }

        ProdutoValor.sort(function(a: number[], b: number[]) {
            return b[1] - a[1];
        })

        for (var i = 0; i < ProdutoValor.length; i++) {
            ClienteOrdenado.push(ProdutoValor[i][0]);
        }
        
        return(res.json(ClienteOrdenado.slice(0, 5)));

    }
}



export default new ListagemController();