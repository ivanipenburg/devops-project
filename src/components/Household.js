import Todo from './Todo'

Household.propTypes = {
  householdTodos: String
}

export default function Household(props){
  return (
    <div className='household'>
      <h3>Your household</h3>
      <h5>Upcoming tasks</h5>
      <ul className='householdList'>
        {props.householdTodos.map((todo, index) => <Todo key={index} task={todo}></Todo>)}
      </ul>
    </div>
  )
}