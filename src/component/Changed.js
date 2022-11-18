import React, { Component } from 'react'
import './Changed.css'

export default class Changed extends Component {
  render() {
    return (
      <div className='container-second d-flex align-items-center flex-column'>
           <h3>Password Changed</h3>    
           <span>Your password has been updated! Now get back in the driver seat, racers are waiting for you!</span>
           <button type="button" className="btn btn-lg bg-black text-white mt-3">JOIN A RACE</button>
      </div>
    )
  }
}
