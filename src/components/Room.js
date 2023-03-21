import './Room.css'
import ProgressBar from './ProgressBar'

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
        {props.todoList.map((todo, index) =>     
          <li className="todoItem" key={index}>
            <div >
              <input type="checkbox"/>
              <label> {todo} </label>
            </div>
          </li>)}
      </ul>
      <button className='newtodo'>+ Add task</button>
    </div>
  )
}