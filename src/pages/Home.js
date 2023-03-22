import { withAuthenticator } from '@aws-amplify/ui-react'
import { API, graphqlOperation } from 'aws-amplify'
import '../components/Home.css'
import Household from '../components/Household'
import NavBar from '../components/NavBar'
import Overview from '../components/Overview'
import RoomCollection from '../components/RoomCollection'
import { useEffect, useState } from 'react'
import { createPrivateTask, deletePrivateRoom, deletePrivateTask } from '../graphql/mutations'
import { listPrivateRooms, listPrivateTasks } from '../graphql/queries'

const Home = () => {
  const [rooms, setRooms] = useState([])
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState(tasks.filter((task) => task.completed === true).length)

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
      <div className='homepage'>
        <Overview totalprogress={completed/tasks.length*100} completed={completed} pending={tasks.length-completed} overdue={0}></Overview>
        <Household setCompleted={setCompleted} completed={completed} householdTodos={tasks}></Household>
        <RoomCollection rooms={rooms} filterTasks={filterTasks} createTask={createTask} deleteRoom={deleteRoom} deleteTask={deleteTask} tasks={tasks} />
      </div>
    </div>
  )
}

export default withAuthenticator(Home)