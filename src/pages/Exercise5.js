import React from 'react'
import VerticalTableList from './components/VerticalTableList'
import "./style.css";

const Exercise5 = () => {

  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (
    <div>
      {animals.map((animal) => 
        <VerticalTableList item = {animal}/>
      )}
    </div>
  )
}

export default Exercise5