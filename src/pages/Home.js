import NavBar from '../components/NavBar'
import Overview from '../components/Overview'
import Room from '../components/Room'
import Household from '../components/Household'
import '../components/Home.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <div className='homepage'>
        <Overview></Overview>
        <Household householdTodos={['Vaske', 'Rydde', 'Tørke støv']}></Household>
        <Room name='Living room' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={54} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
        <Room name='Kitchen' todoList={['Vaske', 'Rydde', 'Tørke støv']} progress={64} illustration='https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?size=626&ext=jpg'/>
      </div>
    </div>
  )
}

export default Home