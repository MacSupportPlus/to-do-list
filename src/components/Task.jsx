const Task = props => {
    const {task, handleToggleCheck, handleDestroyTask, idx}=props


    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title" style={task.isCompleted ?{textDecoration:"line-through"} :null}>{task.title} </h2>
                <div className="form-group"></div>
                <input 
                type="checkbox" 
                className="form-control"
                checked= {task.isCompleted}
                onChange={(e)=> handleToggleCheck(e,idx)}
                />

            </div>
            {
                task.isCompleted ? <button className="btn-danger" onClick = {(e) => handleDestroyTask(e,idx)}>Delete</button> : null
            }
        </div>

    
    
        )
    }

export default Task 