import './Room.css'
import ProgressBar from './ProgressBar'

Room.propTypes = {
  name: String,
  illustration: String,
  progress: Number
}

export default function Room(props){
  return (
    <div className='card'>
      <img className='image' src={props.illustration}></img>
      {props.name}
      <ProgressBar progress='45%'/>
    </div>
  )
}