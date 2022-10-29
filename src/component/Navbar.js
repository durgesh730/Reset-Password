import React from 'react'
import './Navbar.css'
import logo from './../images/Asset 1_1 1.png'

function Navbar() {
  return (
    <>

        <nav className="navbar">
           <div className='container'>
              <img src={logo} className="img-fluid" alt="..."/>

              <ul className="nav justify-content-center ">
                   <li className="nav-item ">
                    <a className="nav-link active mx-0 join "  href="#">Join a Race</a>
                   </li>

                   <li className="nav-item">
                    <a className="nav-link active mx-5 leader" href="#">Leaderboard</a>
                   </li>

                  <li className="nav-item">
                    <a className=" btn nav-link active bg-white py-1 px-4" href="#">Login</a>
                   </li>

                </ul>
           </div>
        </nav>

    </>
  )
}

export default Navbar
