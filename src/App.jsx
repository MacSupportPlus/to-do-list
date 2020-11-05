import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = e => {
    e.preventDefault();
    let task = {
      title: input,
      isCompleted: false
    }
    setTasks([...tasks,task]);
    setInput("");
  }
  const handleToggleCheck= (e, idx) => {

    let task = tasks[idx];
    task.isCompleted = !task.isCompleted;
    setTasks([...tasks.slice(0,idx),task,...tasks.slice(idx+1)]);
  }
  const handleDestroyTask = (e, idx) => {
    setTasks([...tasks.slice(0,idx),...tasks.slice(idx+1)]);
  }
  return (
    <div className="App">
      <form onSubmit={handleAddTask} className="mx-auto col-4 bg-dark text-warning p-5">
        <h2 className= "text-center">Add A Task: </h2>
        <div className="form-group">
          <input 
          type="text" 
            className="text form-control"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <input type= "submit" valu="add" className="btn btn-warning btn-outline-dark" />
      </form>
      <div className="d-flex flex-column col-8 mx-auto justify-content-center">
          {
           tasks.map((task,i) => {
            return <Task 
                    idx={i}
                    handleToggleCheck={handleToggleCheck}
                    task={task}
                    key={i}
                    handleDestroyTask={handleDestroyTask}
                  />
           
          })
        } 
      </div>
    </div>     
  );

}

export default App;
