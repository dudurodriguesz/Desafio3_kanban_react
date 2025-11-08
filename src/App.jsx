import { useState } from 'react'
import './App.css'
import Coluna from './components/Coluna';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const handleAddTarefa = (DataTarefa, status) => {
    console.log("3. App principal recebeu os dados!");
    const novaTarefa ={
      id: Date.now(),
      ...DataTarefa,
      status: status,

    };
    setTarefas((tarefasAnt) => [...tarefasAnt, novaTarefa]);
    }

  const tarefasAfazer = tarefas.filter((tarefa) => tarefa.status === 'A Fazer')
  const tarefasFazendo = tarefas.filter((tarefa) => tarefa.status === 'Fazendo')
  const tarefasFeitas = tarefas.filter((tarefa) => tarefa.status === 'Feito')
  

  return (
    <div className='app-container'>
      <div className='quadro'>
       
      
          <Coluna titulo = 'A Fazer' tarefas ={tarefasAfazer} status = 'A Fazer' onAddTarefa = {handleAddTarefa} />

          <Coluna titulo = 'Fazendo' tarefas ={tarefasFazendo} status = 'Fazendo' onAddTarefa = {handleAddTarefa}/>

          <Coluna titulo = 'Feito' tarefas ={tarefasFeitas}  status = 'Feito' onAddTarefa={handleAddTarefa}/>
        
      </div>
     
    </div>
  )
}

export default App
