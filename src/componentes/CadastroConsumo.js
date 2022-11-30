export default function FormularioCadastroConsumo(props) {
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="CPF" type="text" className="validate" />
                        <label htmlFor="CPF">CPF do cliente:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome" type="text" className="validate" />
                        <label htmlFor="nome">Nome do produto: </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Cadastrar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}