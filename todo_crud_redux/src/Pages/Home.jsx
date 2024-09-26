import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADDTODODATA, GETTODODATA } from '../Redux/ActionType';

// http://localhost:8000/tasks

export default function Home() {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const todoData = useSelector((store) => store.todo);

    const handleAddData = () => {
        dispatch({
            type: ADDTODODATA,
            payload:data
        });
        setTodo("");
    };

  

    useEffect(() => {
        fetch("http://localhost:8000/tasks")
        .then((response) => response.json()) 
        .then((data) => {
            dispatch({
                type: GETTODODATA,
                payload: data
            });
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div>
            <div>
                <h1>Todo with Redux</h1>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter your task"
                />
                <button onClick={handleAddData}>Add</button>
            </div>
            <div>
                {todoData.map((item) => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.todo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
