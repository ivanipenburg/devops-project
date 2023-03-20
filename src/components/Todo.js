Todo.propTypes = {
  task: String
}

export default function Todo (props){
  return (
    <li className="todoItem">
      <div>
        <input type="checkbox" />
        <label> {props.task} </label>
      </div>
    </li>
  )
}