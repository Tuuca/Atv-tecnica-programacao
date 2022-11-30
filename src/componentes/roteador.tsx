import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroConsumo from "./formularioCadastroConsumo";
import Listagem from "./Listagem";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Home', 'Cadastrar clientes', 'Cadastrar produto', 'Cadastrar consumo', 'Listagens']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar clientes') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar consumo') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroConsumo tema="purple lighten-4" />
                </>
            )
        } else if (this.state.tela === 'Listagens') {
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        }

    }
}	