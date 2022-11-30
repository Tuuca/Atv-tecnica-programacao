/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class Listagem extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            
            <div className="collection">

                <h4>Listagem geral de clientes</h4>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>

                <h4>Listagem geral de produtos</h4>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                
                <h4>Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.</h4>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                
                <h4>Listagem de todos os clientes por gênero.</h4>
                <h5>Masculino</h5>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <h5>Feminino</h5>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                
                <h4>Listagem geral dos serviços ou produtos mais consumidos.</h4>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                
                <h4>Listagem dos serviços ou produtos mais consumidos por gênero.</h4>
                <h5>Masculino</h5>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <h5>Feminino</h5>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                
                <h4>Listagem dos 10 clientes que menos consumiram produtos ou serviços.</h4>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                
                <h4>Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.</h4>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
            </div>
        )
    }
}