import React, { useState } from 'react'

const Exercise6 = () => {

  const [firstname, setFirstName ] = useState("");
  const [lastname, setLastName ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstname} ${lastname}!`);
  }

  return (
    <div className='centeredContent'>
      <form onSubmit={handleSubmit}>
        <label>First name: 
          <input 
            type='text'
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label> <br /><br />
        <label>Last name: 
          <input 
            type='text'
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label> <br /><br />
        <button style={{ justifyContent: 'center' }} className='centered' type='submit'>GREET ME</button>
      </form>
    </div>
  )
}

export default Exercise6