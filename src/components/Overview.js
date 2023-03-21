import ProgressBar from './ProgressBar'
import './Home.css'

Overview.propTypes = {
  totalprogress: Number,
  pending: Number,
  completed: Number,
  overdue: Number
}

export default function Overview(props) {
  return(
    <div className='overview'>
      <h3 className='overviewtitle'>Overview</h3>
      <h5 style={{color: 'grey'}}>Progress</h5>
      <ProgressBar progressid='overviewprogress' progress={props.totalprogress}></ProgressBar>
      <table className='tasknumbers'>
        <tr id='numbers'>
          <td id='pending' style={{color: 'grey'}}>{props.pending}</td>
          <td id='completed' style={{color: 'green'}}>{props.completed}</td>
          <td id='overdue' style={{color: 'red'}}>{props.overdue}</td>
        </tr>
        <tr>
          <td>Tasks Pending</td>
          <td>Tasks Completed</td>
          <td>Tasks Overdue</td>
        </tr>
      </table>
    </div>
  )
}