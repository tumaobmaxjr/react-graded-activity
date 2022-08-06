import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div>
      <nav className='centered'>
        <Link to='/home'>Home</Link>&nbsp;|&nbsp;
        <Link to='/exercise1'>Exercise 1</Link>&nbsp;|&nbsp;
        <Link to='/exercise2'>Exercise 2</Link>&nbsp;|&nbsp;
        <Link to='/exercise3'>Exercise 3</Link>&nbsp;|&nbsp;
        <Link to='/exercise4'>Exercise 4</Link>&nbsp;|&nbsp;
        <Link to='/exercise5'>Exercise 5</Link>&nbsp;|&nbsp;
        <Link to='/exercise6'>Exercise 6</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Header