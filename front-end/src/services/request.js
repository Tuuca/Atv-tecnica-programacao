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

// route.get(
//     "/listagemCliente",
//     ListagemControllers.listagemCliente
// )

// route.get(
//     "/listagemProduto",
//     ListagemControllers.listagemProduto
// )

// route.get(
//     "/listagem9",
//     ListagemControllers.listagem9
// )

// route.get(
//     "/listagem10",
//     ListagemControllers.listagem10
// )

// route.get(
//     "/listagem11",
//     ListagemControllers.listagem11
// )

// route.get(
//     "/listagem12",
//     ListagemControllers.listagem12
// )

// route.get(
//     "/listagem13",
//     ListagemControllers.listagem13
// )

// route.get(
//     "/listagem14",
//     ListagemControllers.listagem14

export async function listagemCliente() {
    try {
        const response = await crud.get('/listagemCliente');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function listagemProduto() {
    try {
        const response = await crud.get('/listagemProduto');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function listagem9() {
    try {
        const response = await crud.get('/listagem9');
        return response.data;
       
    } catch (error) {
        console.log(error);
    }
}

export async function listagem10() {
    try {
        const response = await crud.get('/listagem10');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function listagem11() {
    try {
        const response = await crud.get('/listagem11');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function listagem12() {
    try {
        const response = await crud.get('/listagem12');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function listagem13() {
    try {
        const response = await crud.get('/listagem13');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function listagem14() {
    try {
        const response = await crud.get('/listagem14');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
