import React from 'react'
import Filler from './Filler'
import './ProgressBar.css'

ProgressBar.propTypes = {
  progress: Number,
  size: String
}

export default function ProgressBar({ progress, size }) {
  // if size is small then set height
  let height = '10px'
  if (size === 'small') {
    height = '5px'
  }
  else if (size === 'large') {
    height = '20px'
  }

  
  return (
    <div className={`progress-bar${progress < 15 ? ' small' : ''}`} style={{ height: `${height}`}}>
      <Filler progress={progress} />
    </div>
  )
}