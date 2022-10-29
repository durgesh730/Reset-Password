import React from 'react'

function bottomNav() {
  return (
    <>
            <section className='bottom-nav'>
                <ul className="nav nav-lower" >
                   <li className="nav-item ">
                    <a className="nav-link active mx-0 text-light"  href="#">About us</a>
                   </li>

                   <li className="nav-item">
                    <a className="nav-link active mx-0 text-light" href="#">Privacy Policy</a>
                   </li>

                  <li className="nav-item">
                    <a className=" nav-link active text-light " href="#">Tutorials</a>
                   </li>

                   <li className="nav-item">
                    <a className=" nav-link active text-light " href="#">Terms of Services</a>
                   </li>

                </ul>    
              </section>
    </>
  )
}

export default bottomNav
