import { useState, useEffect } from 'react'

import { app } from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import './sign-in.css'
import {Link, useNavigate} from "react-router-dom"
import myPicture from '../../assets/my-picture.jpg'

function SignIn() {
  let auth = getAuth();
  const [data, setData] = useState({})

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({...data, ...newInput});
  }

  const [signIn, setSignIn] = useState(false)
  
  const history = useNavigate()

  const handleSubmit = async () => {

    try {
      const response = await signInWithEmailAndPassword(auth, data.email, data.password);
      
      // Check if the sign-in was successful
      if (response.user) {
        history('/home')
        setSignIn(true)
        console.log("Sign-in successful");
        // Navigate to the next page upon successful sign-in
        // You can use a programmatically triggered navigation or set a state variable.
      } else {
        setSignIn(false)
        console.log("Sign-in failed");
        // Handle the case where sign-in was not successful
      }
    } catch (err) {
      alert(err.message);
      console.log("Error occurred during sign-in");
    }

  

    // the function below is to create new user. to sign in use signInWithEmailandPassword
    // signInWithEmailAndPassword(auth, data.email, data.password)
    // .then((response) => {
    //   if (!response.user){
    //     setSignIn(false)
    //   } else {
    //     setSignIn(true)
    //   }
    // })
    // .catch((err) => {
    //   alert(err.message)
    // });

    // console.log(error)
  }


  

  return (
    <>
      <div className='personal'>
        <img src={myPicture} alt='my picture' />
        <p>SIGN IN TO VIEW MY GALLERY</p>
      </div>
      <div className='sign-in-container'>
        <input
          className='email'
          name='email'
          placeholder='Email'
          onChange = {(event)=> handleInput(event)}

            />
          
        <input
          className='password'
          name='password'
          placeholder='Password'
          onChange={(event) => handleInput(event)}

          />
          <div>
            {signIn ? (
              <Link to={"/home"}>
                <input
                  className='submit'
                  type='submit'
                  value="Sign In"
                  onClick={handleSubmit}
                />
              </Link>
            ) : (
              <input
                className='submit'
                type='submit'
                value="Sign In"
                onClick={handleSubmit}
              />
            )}
          </div>
          
      </div>
    </>
  )
}

export default SignIn
