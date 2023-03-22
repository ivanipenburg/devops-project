import Task from './Task'

Household.propTypes = {
  tasks: Array,
  toggleTask: Function,
  deleteTask: Function
}

export default function Household(props){
  return (
    <div className='household'>
      <h3>Your household</h3>
      <h5>Upcoming tasks</h5>
      <ul className='householdList'>
        {/* Map all tasks which are not completed */}
        {props.tasks.filter(task => !task.completed).map((task) =>
          <Task key={task.id} task={task} toggleTask={props.toggleTask} deleteTask={props.deleteTask} />
        )}
      </ul>
    </div>
  )
}