import Room from './Room'
import { Button } from '@aws-amplify/ui-react'

RoomCollection.propTypes ={
  filterTasks: Function,
  createTask: Function,
  deleteRoom: Function,
  deleteTask: Function,
  rooms: Array,
  tasks: Array
}

export default function RoomCollection(props) {

  return(
    <div className='rooms'>
      {props.rooms.map((room) => (
        <div key={room.id}>
          <Room name={room.name} todoList={props.filterTasks(props.tasks, room.id)} roomID={room.id} addTask={props.createTask} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg' />
          <ul>
            {props.tasks
              .filter((task) => task.roomID === room.id)
              .map((task) => (
                <div key={task.id}>
                  <li>{task.title}</li>
                  <Button onClick={() => props.deleteTask(task.id)}>Delete Task</Button>
                </div>
              ))}
          </ul>
          <Button onClick={() => props.deleteRoom(room.id)}>Delete Room</Button>
        </div>
      ))}
    </div>
  )
}