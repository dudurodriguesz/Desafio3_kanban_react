import React, { useState } from "react";
import CardTarefa from './CardTarefa'
import AddTarefaForm from './AddTarefaForm'
import './Coluna.css'

function Coluna({titulo, tarefas, status, onAddTarefa}){

    const [isAdding, setIsAdding] = useState(false)

    const handleSalvaTarefa = (DataTarefa) => {
        console.log("2. Coluna recebeu os dados:", DataTarefa);
        onAddTarefa(DataTarefa, status)

        setIsAdding(false)
    }

    return(
        
        <div className="coluna">
            
            <h2 className="tit">{titulo}</h2>
            <div className="coluna-divider"></div>
            <div className="card-lista">
                {tarefas.map((tarefa) =>(<CardTarefa key={tarefa.id} tarefa={tarefa} />
            ))}
            </div>
            {isAdding ? (
            <AddTarefaForm
            onSave={handleSalvaTarefa}
            onCancel={() => setIsAdding(false)}
            />
            ) : (
            <button className="add-tarefa-btn" onClick={() => setIsAdding(true)}>+</button>
            )}
        </div>
        
    );
}

export default Coluna;
