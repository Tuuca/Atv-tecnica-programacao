import { useState } from "react"
import { createCliente } from '../services/request';

export default function FormularioCadastroCliente(props) {

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
                        <input name="nome" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input name="cpf" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="cpf">CPF</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input name="genero" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="genero">Genero</label>
                    </div>
                    <div className="input-field col s6">
                        <input name="dataemissao" type="date" className="validate" onChange={pega}/>
                        <label htmlFor="dataemissao">Data de emissão</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action" onClick={() => createCliente(values)}>Cadastrar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}