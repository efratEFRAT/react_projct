
import { useSelector, useDispatch } from 'react-redux';
import { add_todo, remov_todo } from './action';
import { useState } from 'react';

export default function Todos() {
    const Tasks = useSelector((state) => state.todes);
    const dispatch = useDispatch();
    const[name,setName]=useState();
    const[id,setId]=useState();
    function add_todo1() {
        dispatch(add_todo({ name: name, id: id }));
    }

    return (
        <>
            <h1>Your Tasks list</h1>
            <ul>
                {Tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => dispatch(remov_todo(task.id))}>Remove</button>
                    </li>
                ))}
</ul>
                <p>Task Name</p>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                <p> taskId</p>
                <input type="text" name="id" onChange={(e)=>setId(e.target.value)}/>
                <button onClick={add_todo1()}>Add Task</button>
            
        </>
    );  }
