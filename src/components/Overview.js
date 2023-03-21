import ProgressBar from './ProgressBar'
import './Home.css'

export default function Overview() {
  return(
    <div className='overview'>
      <h3 className='overviewtitle'>Overview</h3>
      <h5 style={{color: 'grey'}}>Progress</h5>
      <ProgressBar progressid='overviewprogress' progress={30}></ProgressBar>
      <table className='tasknumbers'>
        <tr id='numbers'>
          <td id='pending' style={{color: 'grey'}}>10</td>
          <td id='completed' style={{color: 'green'}}>2</td>
          <td id='overdue' style={{color: 'red'}}>3</td>
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