import '../App.css'
import NavBar from '../components/NavBar'
import RoomsContainer from '../components/RoomsContainer'

const Rooms = () => {
  return (
    <div>
      <NavBar />
      <div  className="pageBody"> 
        <h1>Rooms</h1>
        <RoomsContainer />
      </div>
    </div>
  )
}

export default Rooms