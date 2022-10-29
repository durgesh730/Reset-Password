import React, { Component } from 'react'
import './user.css';

export default class user extends Component {
  render() {

   inputPassword = (e) => {
      this.setState(({ ...state, password: e.target.value }));
    };
    inputPasswordRE = (e) => {
      this.setState({ ...state, re_password: e.target.value });
      if (password === re_password) {
        alert(`SUCCESS`)
      } else {alert(`ERROR`)}
    }

    return (
      <>
            <form className='container-fluid' onSubmit={this.handleSubmit}>
            <div className='heading text-center'>
                <h3>Password Reset</h3>
            </div>
           
           <div className=' inputs d-flex align-items-center flex-column'>
            <div className="mb-3 align-items-center col-sm-2  pt-2">
              <label for="exampleInputPassword1" className="form-label">NEW PASSWORD</label>
              <input type="password"  onChange={this.inputPassword} className="form-control pt-0" id="exampleInputPassword1" value={this.password} />
            </div>

            <div className="mb-3 align-items-center  col-sm-2  pt-2">
              <label for="exampleInputPassword1" className="form-label">RE-ENTER NEW PASSWORD</label>
              <input type="password" onChange={this.inputPasswordRE} className="form-control pt-0" id="exampleInputPassword1" value={this.repassword}/>
            </div>


            <button type="button" className="btn btn-lg bg-black text-white mt-2 px-4">RESET PASSWORD</button>    
         </div>
        </form> 
      </>
    )
  }
}
