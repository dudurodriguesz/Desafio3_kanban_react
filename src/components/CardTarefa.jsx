import React from "react";
import './CardTarefa.css';

function CardTarefa({tarefa}) {

    const {titulo, responsavel, prazo, descricao } = tarefa;

    return(
        <div className="card-tarefa">
            <h4>{titulo}</h4>
            <p className="responsavel">
                <span className="icon">👤</span> {responsavel}
            </p>
            <p className="prazo">
                <span className="icon">📅</span> {prazo}   
            </p> 
            <p className="descricao">{descricao}</p>
        </div>

    );
}
