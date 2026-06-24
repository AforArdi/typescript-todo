'use client'

import { Todo } from "@/component/utils/todo";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function Home() {
  // const mainTodo: Todo[] = [
  //   {
  //     id: 1,
  //     title: "Todo 1",
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Todo 2",
  //     isDone: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Todo 3",
  //     isDone: false,
  //   }
  // ];

  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  function handleAddTodo() {
    if (text.trim() === '') {
      return
    }
    const newTodo: Todo = {
      id: Date.now(),
      title: text,
      isDone: false,
    }
    setTodos([...todos, newTodo])
    setText('');
    // console.log(todos);
  }
  function toggleTodo(id: number) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }
  function deleteTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="w-60% mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      ></input>
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <ol className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li className="flex items-center justify-between" key={todo.id}>
            <div>
              <Button onClick={() => toggleTodo(todo.id)}>
                {todo.isDone ? "✓" : "☐"}
              </Button>
              {todo.isDone ? <del>{todo.title}</del> : <span>{todo.title}</span>}
            </div>
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </li>
        ))}
      </ol>
    </main>
  );
}
