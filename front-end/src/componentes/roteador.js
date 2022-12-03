import { useState } from "react";

import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./CadastroCliente";
import EditarCliente from "./EditarCliente";
import ExcluirCliente from "./ExcluirCliente";
import FormularioCadastroProduto from "./CadastroProduto";
import EditarProduto from "./EditarProduto";
import ExcluirProduto from "./ExcluirProduto";
import FormularioCadastroConsumo from "./CadastroConsumo";
import Listagem from "./Listagem";

export default function Roteador() {
    const [tela, setTela] = useState('Home')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Home') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastrar cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Editar cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <EditarCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Excluir cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <ExcluirCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastrar produto') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Editar produto') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <EditarProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Excluir produto') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <ExcluirProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastrar consumo') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <FormularioCadastroConsumo tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Listagens') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <Listagem tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Cadastrar cliente', 'Editar cliente', 'Excluir cliente', 'Cadastrar produto', 'Editar produto', 'Excluir produto', 'Cadastrar consumo', 'Listagens']} />
                    <Home tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}