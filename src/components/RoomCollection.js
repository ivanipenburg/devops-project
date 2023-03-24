import Room from './Room'


RoomCollection.propTypes ={
  filterTasks: Function,
  createTask: Function,
  deleteRoom: Function,
  deleteTask: Function,
  rooms: Array,
  tasks: Array,
  toggleTask: Function,
  createRoom: Function,
  extraclass: String
}

export default function RoomCollection(props) {
  return(
    <div className={props.extraclass}>
      {props.rooms.map((room) => (
        <div key={room.id}>
          <Room name={room.name} tasks={props.filterTasks(room.id)} roomID={room.id} addTask={props.createTask} deleteTask={props.deleteTask} toggleTask={props.toggleTask} deleteRoom={props.deleteRoom} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg' ></Room>
        </div>
      ))}
    </div>
  )
}