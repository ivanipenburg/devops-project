import { withAuthenticator } from '@aws-amplify/ui-react'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import '../components/Home.css'
import Household from '../components/Household'
import NavBar from '../components/NavBar'
import Overview from '../components/Overview'
import RoomCollection from '../components/RoomCollection'
import { createPrivateRoom, createPrivateTask, deletePrivateRoom, deletePrivateTask, updatePrivateTask } from '../graphql/mutations'
import { listPrivateRooms, listPrivateTasks } from '../graphql/queries'

const Home = () => {
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
      <div className='homepage'>
        <Overview totalprogress={(tasks.filter(task => task.completed).length / tasks.length) * 100} completed={tasks.filter(task => task.completed).length} pending={tasks.length - tasks.filter(task => task.completed).length} overdue={0}></Overview>
        <Household tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}></Household>
        <RoomCollection rooms={rooms} extraclass={'overviewrooms'} filterTasks={filterTasks} createTask={createTask} deleteRoom={deleteRoom} deleteTask={deleteTask} createRoom={createRoom} toggleTask={toggleTask} tasks={tasks} />
      </div>
    </div>
  )
}

export default withAuthenticator(Home)