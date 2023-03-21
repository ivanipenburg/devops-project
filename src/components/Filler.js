import React from 'react'
import './ProgressBar.css'

Filler.propTypes = {
  progress: Number
}

export default function Filler({ progress }) {
  return (
    <div className={`filler-green filler${progress < 15 ? ' filler-black' : ''}`} style={{ width: `${progress}%` }}>
      <p className="filler-text">{progress}%</p>
    </div>
  )
}