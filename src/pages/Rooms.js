import { API } from 'aws-amplify'
import NavBar from '../components/NavBar'

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
    </div>
  )
}

export default Rooms