import React, { useState } from "react";
import './CardTarefa.css'
import iconCheck from '../assets/check.png';
import iconContato from '../assets/pessoa3.png';
import iconCalendario from '../assets/calendario2.png';
import iconX from '../assets/x.png';

function AddTarefaForm({onSave, onCancel}){

    const [titulo, setTitulo] = useState("Título da tarefa")
    const [responsavel, setResponsavel] = useState("Responsável")
    const[prazo, setPrazo] = useState("dd/mm/YYYY")
    const[descricao, setDescricao] = useState("Descrição")
    
    const handleConfirma = (evento) => {

        evento.preventDefault()

        const TarefaData = {
            titulo,
            responsavel,
            prazo, 
            descricao,
        }
        onSave(TarefaData)
        console.log("1. Formulário enviou os dados:", TarefaData);
    }
    return(
        <form className="card-tarefa nova-tarefa-form" onSubmit={handleConfirma}
        >
            <input className="form-titulo" type="text" value={titulo} onChange={(evento) => setTitulo(evento.target.value)}
            />
            <div className="form-info-esquerda">
                <p className="card-info">
                    <img src={iconContato} alt="Icone Contato" className="icone" />
                    <input type="text" value={responsavel} onChange={(evento) => setResponsavel(evento.target.value)}
                    />
                </p>
                <p className="card-info">
                    <img src={iconCalendario} alt="Icone Calendário" className="icone-ca" />
                    <input type="text" value={prazo} onChange={(evento) => setPrazo(evento.target.value)} 
                    />
                </p>
            </div>
            <textarea className= "descricao"value={descricao} onChange={(evento) => setDescricao(evento.target.value)}
            />
            <div className="form-btns">
                <button type="button" onClick={onCancel}><img src={iconX} alt="Icone X" className="icone-btn" /></button>
                <button type="submit"><img src={iconCheck} alt="Icone CHECK" className="icone-btn"/></button>
            </div>

        </form>
    )
}

export default AddTarefaForm