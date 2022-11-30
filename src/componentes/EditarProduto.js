export default function EditarProduto(props) {
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="editar" type="text" className="validate" />
                        <label htmlFor="editar">Nome do produto que deseja editar:</label>
                    </div>
                </div>
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
                        <button className={estiloBotao} type="submit" name="action">Editar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}