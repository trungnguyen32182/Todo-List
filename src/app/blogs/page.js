'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from '../components/app.todo';
import useSWR, { mutate } from 'swr';
function Blogs() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem('DataTodo');

        if (storedData) {
            setTodos(JSON.parse(storedData));
        } else {
            axios.get('https://dummyjson.com/todos')
                .then((res) => {
                    localStorage.setItem('DataTodo', JSON.stringify(res.data.todos));
                    setTodos(res.data.todos);
                })
                .catch((error) => {
                    console.error('Error fetching todos:', error);
                });
        }
    }, [todos]); 
    return (
        <TodoList
            todos={todos}
            setTodos={setTodos}
        />
    );
}

export default Blogs;
