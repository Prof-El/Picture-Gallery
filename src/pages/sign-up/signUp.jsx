import { useState } from 'react'

import './App.css'
import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp() {
  let auth = getAuth();
  const [data, setData] = useState({})

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({...data, ...newInput});
  }


  const handleSubmit = () => {
    // the function below is to create new user. to sign in use signInWithEmailandPassword
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    });
  }

  return (
    <>
      <div className='App'>
        <input
          name='email'
          placeholder='Email'
          onChange = {(event)=> handleInput(event)}

            />
          
        <input
          name='password'
          placeholder='Password'
          onChange={(event) => handleInput(event)}

          />

          <input
            type='submit'
            placeholder='Sign In'
            onClick={handleSubmit}
            />
      </div>
    </>
  )
}

export default SignUp
