import { Button, TextField, View } from '@aws-amplify/ui-react'
import ProgressBar from './ProgressBar'
import './Room.css'
import Task from './Task'

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
      <div className='roomcontent'>
        {props.name}
        <ProgressBar progress={props.tasks.filter(task => task.completed).length/props.tasks.length*100}/>
        <ul className='roomList'>
          {props.tasks.map((task) =>
            <Task key={task.id} task={task} toggleTask={props.toggleTask} deleteTask={props.deleteTask} />
          )}
        </ul>
        <View as='form' onSubmit={props.addTask}>
          <TextField label='Create new task:' size='small' className='taskinput' name='name' placeholder='Write task here...' isRequired={true} margin={10} outerEndComponent={<Button size='small' type='submit'>+</Button>}/>
          <input type='hidden' name='roomid' value={props.roomID} />
        </View>
        <Button size='small' className='deleteroom' onClick={() => props.deleteRoom(props.roomID)}>Delete Room</Button>
      </div>
    </div>
  )
}