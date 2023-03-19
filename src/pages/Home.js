import { withAuthenticator } from '@aws-amplify/ui-react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  )
}

export default withAuthenticator(Home)