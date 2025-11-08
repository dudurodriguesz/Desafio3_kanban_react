import React from "react";
import './CardTarefa.css';

import iconContato from '../assets/pessoa3.png';
import iconCalendario from '../assets/calendario2.png';

function CardTarefa({tarefa}) {

    const {titulo, responsavel, prazo, descricao } = tarefa;

    return(
        <div className="card-tarefa ">
            <h3>{titulo}</h3>
            <div className="lado-esquerdo">
                <p className="card-info">
                    <img src={iconContato} alt="Icone Contato" className="icone"/>
                    {responsavel}
                </p>
                <p className="card-info">
                    <img src={iconCalendario} alt="Icone Calendário"  className="icone-ca" />
                    {prazo}   
                </p> 
            </div>
            <p className="descricao">{descricao}</p>
        </div>

    );
}

export default CardTarefa
