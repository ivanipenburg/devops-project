import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import Filler from './Filler'
import './ProgressBar.css'

ProgressBar.propTypes = {
  progress: Number,
  size: String,
  progressid: String
}

export default function ProgressBar({ progress, size, progressid }) {
  // const [isExploding, setIsExploding] = React.useState(false)

  
  let height = '20px'
  if (size === 'small') {
    height = '5px'
  }
  else if (size === 'large') {
    height = '20px'
  }
  
  return (
    <div id={progressid} className={`progress-bar${progress < 15 ? ' small' : ''}`} style={{ height: `${height}` }}>
      {progress === 100 && <ConfettiExplosion />}
      <Filler progress={progress} />
    </div>
  )
}