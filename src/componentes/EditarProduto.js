import { useState } from "react"
import { editarProduto } from '../services/request';

export default function EditarProduto(props) {

    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }

    let estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input name="nome" type="text" className="validate" onChange={pega} />
                        <label htmlFor="nome">Nome do produto que deseja editar:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input name="valor" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="valor">Valor</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action" onClick={() => editarProduto(values)}>Editar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}