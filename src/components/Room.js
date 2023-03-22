import { Button, TextField, View } from '@aws-amplify/ui-react'
import './Room.css'
import ProgressBar from './ProgressBar'
import {useState} from 'react'

Room.propTypes = {
  name: String,
  illustration: String,
  progress: Number,
  todoList: Array,
  roomID: String,
  addTask: Function
}

export default function Room(props){
  const [completed, setCompleted] = useState(0)

  const handleChange = event => {
    if (event.target.checked){
      setCompleted(completed+1)
    }
    else{
      setCompleted(completed-1)
    }
  }

  return (
    <div className='card'>
      <img className='image' src={props.illustration}></img>
      {props.name}
      <ProgressBar progress={completed/props.todoList.length*100}/>
      <ul className='roomList'>
        {props.todoList.map((task) =>     
          <li className='todoItem' key={task.id}>
            <div >
              <input type='checkbox' onChange={handleChange}/>
              <label> {task.title} </label>
            </div>
          </li>)}
      </ul>
      <View as='form' onSubmit={props.addTask}>
        <TextField label='Create new task:' size='small' className='taskinput' name='name' placeholder='Write task here...' isRequired={true} margin={10} outerEndComponent={<Button size='small' type='submit'>+</Button>}/>
        <input type='hidden' name='roomid' value={props.roomID} />
      </View>
    </div>
  )
}