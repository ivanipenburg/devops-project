import { API } from 'aws-amplify'
import NavBar from '../components/NavBar'
import Room from '../components/Room'
import '../components/Room.css'

const getData = async () => {
  const data = await API.get('RoomsApi', '/rooms')
  console.log(data)
}

const Rooms = () => {
  getData()
  return (
    <div>
      <NavBar />
      <h1>Rooms</h1>
      <div className='rooms'>
        <Room name='Living room' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={54} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>   
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>  
      </div>
    </div>
  )
}

export default Rooms