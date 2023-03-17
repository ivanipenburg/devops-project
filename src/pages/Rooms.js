import { API } from 'aws-amplify'
import NavBar from '../components/NavBar'
import Room from '../components/Room'

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
      <Room name='Living room' illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>    
    </div>
  )
}

export default Rooms