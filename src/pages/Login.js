import React, { Component } from "react";
import CONFIG from '../configs/main';

class Login extends Component {

    handleClick() {
        let email = document.getElementById('email').value,
            pass = document.getElementById('pass').value;

        if(!email || !pass) {
            alert('Please enter all fields')
        } else {
            fetch(`${CONFIG.BASE_URL}/store/auth/login`, {
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
              window.location.href = '/account/home';
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
              <h3>Log into your account</h3>
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

                <button type='button' onClick={this.handleClick} className='btn btn-primary'>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
