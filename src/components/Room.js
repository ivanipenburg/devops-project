import './Room.css'
import ProgressBar from './ProgressBar'
import Todo from './Todo'

Room.propTypes = {
  name: String,
  illustration: String,
  progress: Number,
  todoList: String
}

export default function Room(props){
  return (
    <div className='card'>
      <img className='image' src={props.illustration}></img>
      {props.name}
      <ProgressBar progress={props.progress}/>
      <ul className='roomList'>
        {props.todoList.map((todo, index) => <Todo key={index} task={todo}></Todo>)}
      </ul>
      <button className='newtodo'>+ Add task</button>
    </div>
  )
}