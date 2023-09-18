import { useState } from 'react';

const todoForm = ({addTodo}) => {
    const [value, setValue] = useState ("");
    const [category, setCategory] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addtodo (value, category);
        setValue ("");
        setCategory ("");
    };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Digite o título' 
            value={value}
            onChange={(e) => setValue (e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory (e.target.value)}>
                <option value="">Selecione</option>
                <option value="">Trabalho</option>
                <option value="">Pessoal</option>
                <option value="">Estudos</option>
            </select>
            <button type="submit"> Criar Tarefas</button>
        </form>
    </div>
  )
}

export default todoForm