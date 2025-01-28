
// import { useSelector, useDispatch } from 'react-redux';
// import { add_todo, remove_todo } from './action';
// import { useState } from 'react';

// export default function Todos() {
//     const Tasks = useSelector((state) => state.todes);
//     const dispatch = useDispatch();
//     const[name,setName]=useState('');
//     const[id,setId]=useState('');
//     // function add_todo1() {
//     //     dispatch(add_todo({ name: name, id: id }));
//     // }
//     function add_todo1() {
//         if (!name || !id) {
//             alert("Please provide both Task Name and Task ID");
//             return;
//         }
//         dispatch(add_todo({ name, id: Number(id) }));
//         setName('');
//         setId('');
//     }

//     return (
//         <>
//             <h1>Your Tasks list</h1>
//             <ul>
//                 {Tasks.map((task) => (
//                     <li key={task.id}>
//                         {task.name}
//                         <button onClick={() => dispatch(remove_todo(task.id))}>Remove</button>
//                     </li>
//                 ))}
// </ul>
//                 <p>Task Name</p>
//                 <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
//                 <p> taskId</p>
//                 <input type="text" name="id" value={id} onChange={(e)=>setId(e.target.value)}/>
//                 <button onClick={add_todo1}>Add Task</button>

            
//         </>
//     );  }
import { useSelector, useDispatch } from 'react-redux';
import { add_todo, remove_todo } from './action';
import { useState } from 'react';
export default function Todos() {
    const tasks = useSelector((state) => state.todes);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [taskId, setTaskId] = useState(tasks.length+1); 
    const [priority, setPriority] = useState('');
    function add_todo1() {
   if(name){
        dispatch(add_todo({ name, id: taskId,priority}));
        setName('');
        setTaskId(taskId + 1);
        
       
    
    }
    }

    return (
        <div className="todos-container">
            
            <div className="task-list-container">
                <h1>Your Task List</h1>
                <ul className="task-list">
                <li className="task-item1">
                        <span className="task-name">My task priority:</span> 
                            <span className="task-name">My task:</span> 
                         <span  className="task-name">I finish my task!</span>
                        </li>
                        
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                             {task.priority === '1' ? '🔴' : task.priority === '2' ? '🔴🔴' : '🔴🔴🔴 '}
                            <span className="task-name">{task.name}</span> 
                            <button
                                className="remove-btn"
                                onClick={() => dispatch(remove_todo(task.id))}
                            >  
                            </button>
                            
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
            </div>
        </div>
    );
}