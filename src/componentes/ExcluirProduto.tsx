import { Component } from "react";

type props = {
    tema: string
}

export default class ExcluirProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="editar" type="text" className="validate" />
                            <label htmlFor="editar">Nome do produto que deseja excluir:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Excluir
                                <i className="material-icons right"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}