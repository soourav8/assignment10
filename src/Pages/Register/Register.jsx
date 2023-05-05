import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const [error, setError] = useState("")
    

    const {createUser} = useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        const photo = form.photo.value;
        const name = form.name.value;

        console.log(name,photo)
        

        setError('')

        if(password !== confirm){
            setError('Your password did not match')
            return;

        }
        else if(password.length < 6){
            setError('Password must be minimum six characters')
        }

        createUser(email,password)
        .then((result) =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            
            
        })
        .catch((error) =>{
            console.log(error);
            setError(error.message);
        })

        




    }


    return (
        <Container>
            <Form onSubmit={handleRegister} style={{ width: "20rem", margin: " auto" }}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        

                    />
                </div>

                <div className="mb-3">
                    <label>Photo Url</label>
                    <input
                        type="text" name="photo"
                        className="form-control"
                        placeholder="Enter url"
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"

                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                        type="password" name="confirmPassword"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in?</Link>
                </p>
            <p className='text-danger'>{error}</p>
            </Form>
        </Container>
    );
};

export default Register;