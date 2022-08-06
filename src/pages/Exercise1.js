import React from 'react'
import Button from './components/Button'
import './style.css'

const Exercise1 = () => {

  const clicked = () => {
    alert("Clicked!")
  }

  return (
    <div className='centeredContent'>
      <button onClick={clicked}>
        Click Me
      </button>
    </div>
  )
}

export default Exercise1