import React, { useState } from "react";
import './CardTarefa.css'

function AddTarefaForm({onSave, onCancel}){

    const [titulo, setTitulo] = useState("Título da tarefa")
    const [responsavel, setResponsavel] = useState("Responsável")
    const[prazo, setPrazo] = useState("dd/mm/YYYY")
    const[descricao, setDescricao] = useState("Descrição")
    
    const handleConfirma = (evento) => {

        evento.preventDefault()

        const TarefaData = {
            titulo : titulo,
            responsavel: responsavel,
            prazo: prazo, 
            descricao: descricao,
        }
        onSave(TarefaData)
    }
    return(
        <form className="card-tarefa nova-tarefa-form" onSubmit={handleConfirma}
        >
            <input type="text" value={titulo} onChange={(evento) => setTitulo(evento.target.value)}
            />
            <input type="text" value={responsavel} onChange={(evento) => setResponsavel(evento.target.value)}
            />
            <input type="text" value={prazo} onChange={(evento) => setPrazo(evento.target.value)} 
            />
            <textarea value={descricao} onChange={(evento) => setDescricao(evento.target.value)}
            />
            <div className="form-btns">
                <button type="button" onClick={onCancel}>❌</button>
                <button type="submit">✔️</button>
            </div>

        </form>
    )
}

export default AddTarefaForm