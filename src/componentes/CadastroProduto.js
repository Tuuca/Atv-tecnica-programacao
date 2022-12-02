import { useState } from "react"
import { createProduto } from '../services/request';

export default function FormularioCadastroProduto(props) {
    let estiloBotao = `btn waves-effect waves-light ${props.tema}`

    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    console.log(values);
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input name="nome" type="text" className="validate" onChange={pega} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input name="valor" type="text" className="validate" onChange={pega}/>
                        <label htmlFor="valor">Preço</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action" onClick={() => createProduto(values)}>Cadastrar
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}