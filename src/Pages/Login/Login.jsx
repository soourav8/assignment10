import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
  const {signIn, loginGoogle, loginGit, user} = useContext(AuthContext)
  const [success, setSuccess] = useState();
   
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email, password)

    signIn(email,password)
    .then((result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      

      form.reset();
    }))
    .catch((error)=>{
      console.log(error);

    })
  }

  const handleGoogle = () =>{
    loginGoogle()
    .then((result)=>{
      const loggedUser  = result.user;
      console.log(loggedUser)
      
    })
    setSuccess("logged in successfully")
    
    .catch((error) =>{
      console.log(error.message)
    })
  }

  const handleGit = () =>{
    loginGit()
    .then(result => {
      const loggedUser = result.user;
    })
    setSuccess('login successfully')

    .catch((error) => {
      console.log(error.message)
    })
  }

  






  return (
    <Container >
      <Form onSubmit={handleLogin} style={{ width: "20rem", margin: "4rem auto" }}>
        <h3>LogIn</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email" name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
        New here? Please <Link to="/register">  Register</Link>
        </p>
          <Button  onClick={handleGoogle} variant="success">Login with Google</Button>
          <Button  className='ms-2' onClick={handleGit} variant="secondary" >Login with Github</Button>
          {
            user ? <p className='text-success'>{success}</p> : ""

          }
          
      </Form>
    </Container>
  );
};

export default Login;