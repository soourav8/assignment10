import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../providers/AuthProviders';




const TopNav = () => {
  const {user, logOut} = useContext(AuthContext);
  

  
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result)
       })
      .catch((error) => {
        console.log(error)
      })

      alert('Logout successful')
  }




  return (
    <div >
      <Navbar className='mb-5' bg="light" expand="lg">
        <Container style={{ backgroundColor: "#B0DAFF" }}  >
          <Navbar.Brand href="/" style={{ "color": "#146C94" }} className='fs-2 text fw-bold'>The Italian Dishes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/" style={{ "color": "#146C94" }}>Home</Nav.Link>
              <Nav.Link href="/blog" style={{ "color": "#146C94" }}>Blog</Nav.Link>


            </Nav>
            <Nav>
              {
                user ? 
                <>
                
                    <p className='fw-bold me-3 mt-2'>Welcome</p>    <img style={{width: "3rem" , height: "3rem", borderRadius:"50%",}} src={user.photoURL}/> <button className='ms-2 btn btn-secondary' onClick={handleLogout}> Log out</button>
                
                </> : 
<>
                 <Nav.Link href="/login" className='ms-auto'><Button variant="secondary">Login</Button>
               
               </Nav.Link>
                </>
              }
             

            </Nav>
          </Navbar.Collapse>

          

        </Container>

      </Navbar>

    </div>
  );
};

export default TopNav;