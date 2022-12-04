import { listagemCliente } from "../services/request"
import { listagemProduto } from "../services/request"
import { listagem9 } from "../services/request"
import { listagem10 } from "../services/request"
import { listagem11 } from "../services/request"
import { listagem12 } from "../services/request"
import { listagem13 } from "../services/request"
import { listagem14 } from "../services/request"
import { useState, useEffect, React } from "react"
import Card from "../card/clienteGeral";

export default function Listagem(props) {
    const [clientes, setClientes] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [listagens9, setListagem9] = useState();
    const [listagens10, setListagem10] = useState();
    const [listagens11, setListagem11] = useState();
    const [listagens12, setListagem12] = useState();
    const [listagens13, setListagem13] = useState();
    const [listagens14, setListagem14] = useState();

    useEffect(() => {
        listagemCliente().then((response) => setClientes(response));
    }, []);

    useEffect(() => {
        listagemProduto().then((response) => setProdutos(response));
    }, []);

    useEffect(() => { 
        listagem9().then((response) => setListagem9(response));
    }, []);

    useEffect(() => {
        listagem10().then((response) => setListagem10(response));
    }, []);

    useEffect(() => {
        listagem11().then((response) => setListagem11(response));
    }, []);

    useEffect(() => {
        listagem12().then((response) => setListagem12(response));
    }, []);

    useEffect(() => {
        listagem13().then((response) => setListagem13(response));
    }, []);

    useEffect(() => {
        listagem14().then((response) => setListagem14(response));
    }, []);

    return (

        <div className="collection">
            <h4>Listagem geral de clientes</h4>
            {
                clientes && clientes.map((cliente) => {
                    return (<Card nome={cliente.nome} />

                    )
                })
            }

            <h4>Listagem geral de produtos</h4>
            {
                produtos && produtos.map((produto) => {
                    return (<Card nome={produto.nome} />
                    )
                })
            }

            <h4>Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.</h4>
            {
                listagens9 && listagens9.map((listagem9) => {
                    return (<Card nome={listagem9} />
                    )
                })
            }

            <h4>Listagem de todos os clientes por gênero.</h4>
            <h5>Masculino</h5>

            <h5>Feminino</h5>


            <h4>Listagem geral dos serviços ou produtos mais consumidos.</h4>
            {
                listagens11 && listagens11.map((listagem11) => {
                    return (<Card nome={listagem11} />
                    )
                })
            }

            <h4>Listagem dos serviços ou produtos mais consumidos por gênero.</h4>
            <h5>Masculino</h5>

            <h5>Feminino</h5>


            <h4>Listagem dos 10 clientes que menos consumiram produtos ou serviços.</h4>
            {
                listagens13 && listagens13.map((listagem13) => {
                    return ( 
                    <Card nome={listagem13} />
                    )
                })
            }

            <h4>Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.</h4>
            {
                listagens14 && listagens14.map((listagem14) => {
                    return (<Card nome={listagem14} />
                    )
                })
            }
        </div>
    )
}