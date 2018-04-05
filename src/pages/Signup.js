import React, { Component } from "react";
import CONFIG from '../configs/main';

class Signup extends Component {

    handleClick() {
        let email = document.getElementById('email').value,
            pass = document.getElementById('pass').value,
            pass2 = document.getElementById('pass2').value;


        if(!email || !pass || !pass2) {
            alert('Please enter all fields')
        } else if(pass !== pass2) {
            alert('Mismatching passwords')
        } else {
          fetch(`${CONFIG.BASE_URL}/store/auth/register`, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: pass
            }),
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            return res.json();
          }).then(resp => {
            console.log(resp)
            //window.location.href = '/account/home';
          }).catch(e => {
            console.log(e);
          })
        }
        
    }
  render() {
    return (
      <div className="auth-container">
        <div className="container">
          <div className="row" />
          <div className="col-sm-6 offset-sm-3">
            <div className="auth-card">
              <h3>Create your account</h3>
              <div className="field-holder">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    id='email'
                    type="email"
                    style={{borderLeft:"none"}}
                    className="form-control"
                    placeholder="Email Address"
                  />
                  
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <i class="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input
                    id='pass'
                    type="password"
                    style={{borderLeft:"none"}}
                    className="form-control"
                    placeholder="Password"
                  />
                  
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <i class="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input
                    id='pass2'
                    type="password"
                    style={{borderLeft:"none"}}
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                  
                </div>

                <button type='button' onClick={this.handleClick} className='btn btn-primary'>Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
