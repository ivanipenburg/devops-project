import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Room from '../components/Room'
import '../components/Room.css'

import { createPrivateRoom, createPrivateTask, deletePrivateRoom, deletePrivateTask, updatePrivateTask } from '../graphql/mutations'
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
      privateRoomTasksId: form.get('roomid'),
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

  // toggleTask based on input value 
  const toggleTask = async (e) => {
    const id = e.target.value
    const task = tasks.find((task) => task.id === id)
    const newTask = { ...task, completed: !task.completed }
    setTasks([...tasks.filter((task) => task.id !== id), newTask])
    // Update private task expects id and completed
    await API.graphql({
      query: updatePrivateTask,
      variables: { input: { id, completed: newTask.completed } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
  }

  const deleteTask = async (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
    await API.graphql({
      query: deletePrivateTask,
      variables: { input: { id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

  }

  const filterTasks = (roomID) => {
    return tasks.filter((task) => task.privateRoomTasksId === roomID)
  }

  return (
    <div>
      <NavBar />
      <View as="form" className='createroom' onSubmit={createRoom}>
        <h1>Your spaces</h1>
        <TextField width='300px' name="name" marginBottom='1em' label='Create new room:' placeholder='Enter a room name...' outerEndComponent={<Button className='newroom' type='submit'>+</Button>} />
      </View>
      <div className='rooms'>
        {rooms.map((room) => (
          <div key={room.id}>
            <Room name={room.name} tasks={filterTasks(room.id)} roomID={room.id} addTask={createTask} deleteTask={deleteTask} toggleTask={toggleTask} deleteRoom={deleteRoom} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg' ></Room>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms