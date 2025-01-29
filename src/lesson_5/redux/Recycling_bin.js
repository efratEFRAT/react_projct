
import { useSelector, useDispatch } from 'react-redux';
import { add_todo, remove_forever, remove_todo, restore } from './action';
import { useEffect, useState } from 'react';
export default function Recycling_bin() {
    const binTasks = useSelector((state) => state.taskBin1.taskBin);
    console.log( binTasks);
    const dispatch = useDispatch();
        // function remove_forever1(dispatch(remove_forever(task.id))){


    // }
    return (<><div>
        <h4>Your bin Tasks</h4>
        <ul>
            <li className="task-item1">
            <span className="task-name">my task:</span>
             <span className="task-name">remove</span>
                <span className="task-name">restore</span>
            </li>
            { binTasks.map((task) => (
                <li key={task.id} className="task-item">
                    <span className="task-name">{task.name}</span>
                    <button onClick={() => dispatch(remove_forever(task))}>✓</button>
                    <button onClick={() => dispatch(restore(task))}>♻️</button>
                </li>
            ))}
        </ul>

    </div></>);

}