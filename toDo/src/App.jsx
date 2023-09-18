import { useState } from 'react'
import "./App.css";
import Todo from './components/Todo';
import todoForm from './components/todoForm';
import Search from "./components/Search";


function App() {
  const[todos, setTodos] = useState ([
    {
      id: 1,
      text: "Criar Funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar",
      category: "Estudos",
      isCompleted: false,
    },

  ]);

  const [search, setSearch] = useState ("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor (Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
   ];
   setTodos (newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredtodos = newtodos.filter((todo) => 
      todo.id !== id ? todo : null
      );
      setTodos (filteredtodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    settodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <search search= {search} setSearch={setSearch} />
      <filter filter= {filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter9((todo)=> filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare (b.tex) : b.text.localeCompare (a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removetodo} completeTodo={completeTodo} />
        ))}
      </div>
      <todoForm addTodo={addTodo}/>
    </div>
  );
  
}

export default App
