import { crud } from "./crud";

export async function createCliente(cliente) {
    try {
        const payload = {
            cpf: cliente.cpf,
            nome: cliente.nome,
            genero: cliente.genero,
            dataemissao: cliente.dataemissao,
        }
        await crud.post('/cliente', payload);
    } catch (error) {
        console.log(error);
    }
}

export async function createProduto(produto) {
    try {
        const payload = {
            nome: produto.nome,
            valor: produto.valor
        }
        await crud.post('/produto', payload);
    } catch (error) {
        console.log(error);
    }
}

export async function createConsumo(consumo) {
    try {
        const payload = {
            cpf: consumo.cpf,
            nome: consumo.nome,
        }
        await crud.post('/consumo', payload);
    } catch (error) {
        console.log(error);
    }
}

export async function editarCliente(cliente) {
    try {
        const payload = {
            cpf: cliente.cpf,
            nome: cliente.nome,
            genero: cliente.genero,
            dataemissao: cliente.dataemissao,
        }
        await crud.post('/clienteUpdate', payload);
    } catch (error) {
        console.log(error);
    }
}

export async function editarProduto(produto) {
    try {
        const payload = {
            nome: produto.nome,
            valor: produto.valor
        }
        await crud.post('/produtoUpdate', payload);
    } catch (error) {
        console.log(error);
    }
}

export async function excluirCliente(cliente) {
    try {
        await crud.delete(`/clienteDelete/${cliente.cpf}`);
    } catch (error) {
        console.log(error);
    }
}

export async function excluirProduto(produto) {
    try {
        await crud.delete(`/produtoDelete/${produto.nome}`);
    } catch (error) {
        console.log(error);
    }
}