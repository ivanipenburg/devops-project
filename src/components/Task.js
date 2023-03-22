Task.propTypes = {
  task: Object,
  toggleTask: Function,
  deleteTask: Function
}

export default function Task(props) {
  return (
    <li className='todoItem' key={props.task.id}>
      <div>
        <input type='checkbox' checked={props.task.completed} onChange={props.toggleTask} value={props.task.id} />
        <label> {props.task.title} </label>
        <button className='deletetask' onClick={() => props.deleteTask(props.task.id)}>x</button>
      </div>
    </li>
  )
}