import React from 'react'

const Exercise4 = () => {

  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div>
      {animals.map(item =>
        <ul>
          <li>{item}</li>
        </ul>  
      )}
    </div>
  )
}

export default Exercise4