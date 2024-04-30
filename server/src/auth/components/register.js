import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'


function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })


  //handleInput

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });

  }
  //handleSubmit
  const handleSubmit = async (Event) => {
    Event.preventDefault();
    //object distructuring

    const { username, email, password } = user;
    // console.log( username, email, password);

    // sending data into backend post method

    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify({
          username, email, password
        })
      })
      if (res.status === 400 || !res) {
        window.alert('Already Ues Details')
      } else {
        window.alert('Registed Successfully');
        navigate('/login')
      }
    } catch (error) {
      console.log(error)

    }

  }



  return (
    <>
      <div class="bg-img">
        <div class="content">
          <header>Signup Form</header>
          <form onSubmit={handleSubmit} method='post'>
            <div class="field">
              <span class="fa fa-user"></span>
              <input type="text" placeholder='Username'
                name='username'
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <br />
            <div class="field">
              <span class="fa fa-user"></span>
              <input type="text" name='email' required placeholder="Email or Phone" value={user.email}
                onChange={handleInput} />
            </div>

            <div class="field space">
              <span class="fa fa-lock"></span>
              <input type="password" class="pass-key" name='password' value={user.password}
                onChange={handleInput} required placeholder="Password" />
              <span class="show">SHOW</span>
            </div>
            <div class="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div class="field">
              <input type="submit" value="Register" />
            </div>
          </form>
          <div class="login">
            Or login with
          </div>
          <div class="links">
            <div class="facebook">
              <i class="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div class="instagram">
              <FaGoogle /><span> Google</span>

            </div>
          </div>
          <div class="signup">
            Don't have account?
            <Link to="/login">Login Now</Link>
          </div>
        </div>
      </div>
      
    </>


  )
}


export default Register

