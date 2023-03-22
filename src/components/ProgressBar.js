import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import Filler from './Filler'
import PropTypes from 'prop-types'
import './ProgressBar.css'

ProgressBar.propTypes = {
  progress: Number,
  size: PropTypes.string,
  progressid: PropTypes.objectOf(PropTypes.any)
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
    <div data-testid="progressbar" id={progressid} className={`progress-bar${progress < 15 ? ' small' : ''}`} style={{ height: `${height}`}}>
      {progress === 100 && <ConfettiExplosion />}
      <Filler progress={progress} />
    </div>
  )
}