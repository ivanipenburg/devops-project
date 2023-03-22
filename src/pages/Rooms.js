import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import RoomCollection from '../components/RoomCollection'
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

  const filterTasks = (roomID, taskList) => {
    return taskList.filter((task) => task.roomID === roomID)
  }

  return (
    <div>
      <NavBar />
      <h1>Rooms</h1>
      <View as="form" onSubmit={createRoom}>
        <TextField width='300px' name="name" marginBottom='1em' label='Create new room:' placeholder='Enter a room name...' outerEndComponent={<Button className='newroom' type='submit'>+</Button>} />
      </View>
      <RoomCollection rooms={rooms} filterTasks={filterTasks} createTask={createTask} deleteRoom={deleteRoom} deleteTask={deleteTask} tasks={tasks} />
    </div>
  )
}

export default Rooms