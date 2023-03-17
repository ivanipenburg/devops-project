import './ProgressBar.css'

ProgressBar.propTypes = {
  progress: String
}

export default function ProgressBar(props){
  return (
    <div className='bar' >
      <div className='fill' style={{width: props.progress}}>{props.progress}</div>
    </div>
  )
}