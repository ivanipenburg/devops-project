import Todo from './Todo'

Household.propTypes = {
  householdTodos: String,
  setCompleted: Function,
  completed: Number
}

export default function Household(props){
  return (
    <div className='household'>
      <h3>Your household</h3>
      <h5>Upcoming tasks</h5>
      <ul className='householdList'>
        {props.householdTodos.map((todo, index) => <Todo key={index} task={todo} completed={props.completed} setCompleted={props.setCompleted}></Todo>)}
      </ul>
    </div>
  )
}