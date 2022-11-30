import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroConsumo extends Component<props>{
    render(){
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Nome" type="text" className="validate" />
                            <label htmlFor="Nome">Nome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Preco" type="text" className="validate" />
                            <label htmlFor="Preco">Preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">Cadastrar</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}