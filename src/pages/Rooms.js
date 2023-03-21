import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Room from '../components/Room'
import '../components/Room.css'

import { createPrivateRoom, createPrivateTask, deletePrivateRoom, deletePrivateTask } from '../graphql/mutations'
import { listPrivateRooms, listPrivateTasks } from '../graphql/queries'

import { Button, TextField, View } from '@aws-amplify/ui-react'
const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
    fetchRooms()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listPrivateTasks))
      const tasksData = response.data.listPrivateTasks.items
      console.log('tasksData', tasksData)
      setTasks(tasksData)
    } catch (error) {
      console.log('error on fetching tasks', error)
    }
  }

  const fetchRooms = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listPrivateRooms))
      const roomsData = response.data.listPrivateRooms.items
      console.log('roomsData', roomsData)
      setRooms(roomsData)
    } catch (error) {
      console.log('error on fetching rooms', error)
    }
  }

  const createRoom = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = {
      name: form.get('name'),
    }

    await API.graphql({
      query: createPrivateRoom,
      variables: { input: data },
    })
    fetchRooms()
    e.target.reset()
  }

  const createTask = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)

    const data = {
      title: form.get('name'),
      roomID: form.get('roomid'),
      completed: false,
    }
    await API.graphql({
      query: createPrivateTask,
      variables: { input: data },
    })
    fetchRooms()
    fetchTasks()
    e.target.reset()
  }

  const deleteRoom = async (id) => {
    try {
      await API.graphql({
        query: deletePrivateRoom,
        variables: { input: { id } },
      })
      fetchRooms()
    } catch (error) {
      console.log('error on deleting room', error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await API.graphql({
        query: deletePrivateTask,
        variables: { input: { id } },
      })
      fetchRooms()
      fetchTasks()
    } catch (error) {
      console.log('error on deleting task', error)
    }
  }

  return (
    <div>
      <NavBar />
      <h1>Rooms</h1>
      {/*
      <div className='rooms'>
        <Room name='Living room' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={54} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>   
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>  
      </div>
      */}
      {rooms.map((room) => (
        <div key={room.id}>
          <h2>{room.name}</h2>
          Map all tasks where RoomID matches room.id 
          <ul>
            {tasks
              .filter((task) => task.roomID === room.id)
              .map((task) => (
                <div key={task.id}>
                  <li>{task.title}</li>
                  <Button onClick={() => deleteTask(task.id)}>Delete Task</Button>
                </div>
              ))}
          </ul>
          <View as="form" onSubmit={createTask}>
            <TextField name="name" label="Task Name" />
            <input type="hidden" name="roomid" value={room.id} />
            <Button type="submit">Create Task</Button>
          </View>
          <Button onClick={() => deleteRoom(room.id)}>Delete Room</Button>
        </div>
      ))}
      <View as="form" onSubmit={createRoom}>
        <TextField name="name" label="Room Name" />
        <Button type="submit">Create Room</Button>
      </View>
    </div>
  )
}

export default Rooms