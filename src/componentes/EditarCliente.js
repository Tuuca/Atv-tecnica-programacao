export default function EditarCliente(props) {
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="editar" type="text" className="validate" />
                        <label htmlFor="editar">CPF do cliente que deseja editar:</label>
                    </div>
                </div>
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
                        <button className={estiloBotao} type="submit" name="action">Editar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}