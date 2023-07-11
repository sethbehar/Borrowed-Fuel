import React from 'react'
import './styles/header.css'

function Header() {
  return (
    <div className='header-container'>
        <h1>Borrowed Fuel</h1>
        <p>This app will calculate the total cost of a car trip based on the car, distance traveled, and current average gas price in America. </p>
    </div>
  )
}

export default Header