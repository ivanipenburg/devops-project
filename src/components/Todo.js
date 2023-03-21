Todo.propTypes = {
  task: String,
  completed: Number,
  setCompleted: Function
}

export default function Todo (props){
  const handleChange = event => {
    if (event.target.checked){
      props.setCompleted(props.completed+1)
    }
    else{
      props.setCompleted(props.completed-1)
    }
  }
  return (
    <li className="todoItem">
      <div>
        <input type="checkbox" onChange={handleChange}/>
        <label> {props.task} </label>
      </div>
    </li>
  )
}