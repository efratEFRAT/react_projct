import Recycling_bin from './Recycling_bin';
import { useSelector, useDispatch } from 'react-redux';
import { add_todo, remove_todo } from './action';
import { useEffect, useState } from 'react';
export default function Todos() {
    const tasks = useSelector((state) => state.todos1.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [taskId, setTaskId] = useState(1);
    const [left, setLeft] = useState(0);
    const [priority, setPriority] = useState();
    const [showComponent, setShowComponent] = useState(false);


    function add_todo1() {
   var task={ name, id: taskId, priority }
        dispatch(add_todo(task));
        setName('');
        setTaskId(taskId + 1);
        if (name)
            setLeft(left + 1)
    }
    function remove_todo1(task) {
        dispatch(remove_todo(task))
        setLeft(left - 1);
    }


    return (
        <div className="todos-container">

            <div className="task-list-container">
                <h1>Your Task List</h1>
                <ul className="task-list">
                    <li className="task-item1">
                        <span className="task-name">My task priority:</span>
                        <span className="task-name">My task:</span>
                        <span className="task-name">I finish my task!</span>
                    </li>

                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            {task.priority === '1' ? '|' : task.priority === '2' ? '||' : '||| '}
                            <span className="task-name">{task.name}</span>
                            <button

                                onClick={() => remove_todo1(task)}
                            >
                                👍</button>

                        </li>
                    ))}
                </ul>

            </div>
            <div className="input-container">
                <label>Task Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />
                <label>priority</label>
                <select
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="input-field"
                >
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
                <button className="add-btn" onClick={add_todo1}>Add Task</button>
                <h4> Number of tasks you have left: {left}</h4>
                <button onClick={() => setShowComponent(!showComponent)}>
                    {showComponent ? "close  🗑️" : "view  🗑️"}
                </button>

                {showComponent ? <Recycling_bin /> : ''}


            </div>
        </div>
    );
}