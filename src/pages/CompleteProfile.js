import React, { Component } from "react";

class CompeteProfile extends Component {
  

    handleClick() {
        let user = document.getElementById('email'),
            pass = document.getElementById('pass');

        if(!user || !pass) {
            alert('Please enter all fields')
        } else {
            
        }
    }
  render() {
    return (
      <div className="auth-container">
        <div className="container">
          <div className="row" />
          <div className="col-sm-8 offset-sm-2">
            <div className='CP-container'  id='stp1'>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompleteProfile;
