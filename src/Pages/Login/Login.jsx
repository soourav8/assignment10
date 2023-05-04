import React, { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
  const {signIn} = useContext(AuthContext)

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
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
        New here? Please <Link to="/register">  Register</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;