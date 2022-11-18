import React, { Component } from 'react'
import './user.css'
import Navbar from './Navbar';
import Changed from './Changed';

export default class user extends Component {
   constructor(){
       super();
       this.state = {
          input: {},
          errors:{},
          showCompoment: false,
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleClick = this.handleClick.bind(this);
     
   }

   handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }  

  validate(){
    let input = this.state.input.password;
    let input2 = this.state.input.confirmpassword;
    let errors = {};
    
    if(input.length < 8 && input2.length < 8 ){
      errors["confirmpassword"] = " Password is less than 8"
    }else{
      if(isNaN(input) && isNaN(input2))
      {
        errors["confirmpassword"] = " Password is string only"
      }else{
        if (this.state.input["password"] !== this.state.input["confirmpassword"]) {
        errors["confirmpassword"] = " Password is Not Matched";
        }else{
            errors["confirmpassword"] = " Password is Matched";
            this.setState({
              showComponent: true,
            });
         }
      }   
  }
    this.setState({
      errors: errors
    });
}

handleClick(){
  console.log('Click happened');
    if(this.validate()){
        let input = {};
        input["password"] = "";
        input["confirmpassword"] = "";
        this.setState({input:input});
    }
  }

  render() {
    return (
      <>
         <Navbar/>
           
         {this.state.showComponent ?(
           <Changed/> ):(
           <form className='container-fluid' >
            <div className='heading text-center'>
                <h3>Password Reset</h3>
            </div>
           
           <div className=' inputs d-flex align-items-center flex-column'>
            <div className="mb-3 align-items-center col-sm-2  pt-2">
              <label className="form-label">NEW PASSWORD</label>
              <input type="password" className="form-control py-0"  name="password"  value={this.state.input.password}    onChange={this.handleChange} />

              <div className="text-danger">{this.state.errors.password}</div>
        
            </div>

            <div className="mb-3 align-items-center  col-sm-2  pt-2">
              <label className="form-label">RE-ENTER NEW PASSWORD</label>
              <input type="password"  className="form-control py-0"  name="confirmpassword"    value={this.state.input.confirmpassword}  onChange={this.handleChange}/>

              <div className="text-danger">{this.state.errors.confirmpassword}</div>
              
            </div>
           </div>
             
             <div className='buttonReset d-flex align-items-center flex-column'>
            <button onClick={this.handleClick} type="button" className="btn btn-lg bg-black text-white mt-2 px-4">RESET PASSWORD</button>    
            </div>
        </form> 

       ) }
      </>
    )
  }
}
