import React, { useState } from 'react'

import {useNavigate} from 'react-router-dom'

function Contact() {
 const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    message:''
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

    const { username, email, message } = user;

    // sending data into backend post method

    try {
      const res = await fetch('/message', {
        method: 'POST',
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify({
          username, email, message
        })
      })
      if (res.status === 400 || !res) {
        window.alert('Already Ues Details')
      } else {
        window.alert('Contact information is for message Successfully Send');
        navigate('/')
      }
    } catch (error) {
      console.log(error)

    }

  }






  return (
    <form onSubmit={handleSubmit} method='post'>

      <input type='text'
        placeholder='Username'
        name='username'
        value={user.username}
        onChange={handleInput}
      />
      <br /><br />
      <input type='email' placeholder='Email'
        name='email'
        value={user.email}
        onChange={handleInput}

      />
      <br /><br />
      <input type='text' placeholder='Message'
        name='message'
        value={user.message}
        onChange={handleInput}

      />
      <br /><br />
      <input type='submit' />
      <br /><br />

    </form>
  )
}

export default Contact