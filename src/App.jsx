import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coluna from './components/Coluna';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const handleAddTarefa = (TarefaData, status) => {
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
    <>
      <div className='quadro'>
       
      
          <Coluna title = 'A Fazer' tarefas ={tarefasAfazer} status = 'A Fazer' onAddTarefa = {handleAddTarefa} />

          <Coluna title = 'Fazendo' tarefas ={tarefasFazendo} status = 'fazendo' onAddTarefa = {handleAddTarefa}/>

          <Coluna title = 'Feito' tarefas ={tarefasFeitas}  status = 'Feito' onAddTarefa={handleAddTarefa}/>
        
      </div>
     
    </>
  )
}

export default App
