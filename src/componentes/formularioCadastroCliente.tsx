import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Nome" type="text" className="validate" />
                            <label htmlFor="Nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="CPF" type="text" className="validate" />
                            <label htmlFor="CPF">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Genero" type="text" className="validate" />
                            <label htmlFor="Genero">Genero</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Data" type="date" className="validate" />
                            <label htmlFor="Data">Data de emissão</label>
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