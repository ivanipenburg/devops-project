import { Button, TextField, View } from '@aws-amplify/ui-react'
import ProgressBar from './ProgressBar'
import './Room.css'

Room.propTypes = {
  name: String,
  illustration: String,
  progress: Number,
  tasks: Array,
  roomID: String,
  addTask: Function,
  toggleTask: Function,
  deleteTask: Function,
  deleteRoom: Function
}

export default function Room(props){
  return (
    <div className='card'>
      <img className='image' src={props.illustration}></img>
      {props.name}
      <ProgressBar progress={props.tasks.filter(task => task.completed).length/props.tasks.length*100}/>
      <ul className='roomList'>
        {props.tasks.map((task) =>     
          <li className='todoItem' key={task.id}>
            <div>
              <input type='checkbox' checked={task.completed} onChange={props.toggleTask} value={task.id} />
              <label> {task.title} </label>
              <button className='deletetask' onClick={() => props.deleteTask(task.id)}>x</button>
            </div>
          </li>)}
      </ul>
      <View as='form' onSubmit={props.addTask}>
        <TextField label='Create new task:' size='small' className='taskinput' name='name' placeholder='Write task here...' isRequired={true} margin={10} outerEndComponent={<Button size='small' type='submit'>+</Button>}/>
        <input type='hidden' name='roomid' value={props.roomID} />
      </View>
      <button className='deleteroom' onClick={() => props.deleteRoom(props.roomID)}>Delete Room</button>
    </div>
  )
}