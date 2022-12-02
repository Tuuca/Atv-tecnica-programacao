import { useState } from "react"
import { createConsumo } from '../services/request';

export default function FormularioCadastroConsumo(props) {

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
                        <input name="cpf" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="cpf">CPF do cliente:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input name="nome" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="nome">Nome do produto: </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action" onClick={() => createConsumo(values)}>Cadastrar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}