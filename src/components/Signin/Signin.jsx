import React, { useState } from 'react';
import { signIn, authenticate } from '../auth/index'
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer,MDBCard, MDBCardBody,MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput} from 'mdb-react-ui-kit';
function Signin() {
    
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = data;

  const handleChange = name => event => {
    setData({
      ...data,
      [name]: event.target.value
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(data).then(data => {
      setData({ ...data, });
      authenticate(data);
    })
    event.target.reset();
  }

    return (
        <>
        <MDBContainer className="mt-1"onSubmit={handleSubmit} >
            <MDBCard  >
                <MDBRow className='g-0'>
                    <MDBCol md='6' >
                        <MDBCardImage  src='/assets/burger.jpg' alt="Signin form" className='rounded-start w-100' />
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>
                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <h1 className=" fw-bold mb-0 text-center">Sign In</h1>
                            </div>
                            <h5 className="fw-normal my-4 pb-3 " style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                            <label className=' my-2' >Username</label>
                            <MDBInput wrapperClass='mb-4' id='formControlLg' type='email' size="lg" placeholder='Username' required value={username} onChange={handleChange('username')}  />
                            <label className=' my-2'>Password</label>
                            <MDBInput wrapperClass='mb-4'  id='formControlLg' type='password' size="lg" placeholder='Password' required value={password} onChange={handleChange('password')} />
                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit">Signin</MDBBtn>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to='/signup' style={{ color: '#393f81' }}>Signup here</Link></p>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
        </>
    );
}

export default Signin;