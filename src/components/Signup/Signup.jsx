import React, { useEffect, useState } from 'react';
import { signUp } from '../auth/index'
import { Link } from 'react-router-dom';

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, } from 'mdb-react-ui-kit';

function Signup() {
    const [role, setRole] = useState("")
    // const [showOwner, setShowOwner] = useState(false);
    const [showDriever, setShowDriver] = useState(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        location: '',
        car_number: '',
        rest_location: '',
        role: ''
    });

    const { username, email, password, phonenumber, adress, carnumber } = data;

    const handleChange = name => event => {
        setData({
            ...data,
            [name]: event.target.value,
            role: role
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp(data).then(data => {
            setData({ ...data });
        })
        event.target.reset();

    }
    const handleUser = (event) => {
        if (role === "driver") {
            console.log("role=driver");
            setShowDriver(true);
        }

        if (role === 'user' || role === "owner") {
            console.log("welcom user");
            setShowDriver(false);
        }
    }

    useEffect(() => {
        handleUser(role);
    }, [role])

    return (
        <MDBContainer onSubmit={handleSubmit} >
            <MDBCard className='my-4' >
                <MDBRow className='g-0' >
                    <MDBCol md='6' className="d-none d-md-block">
                        <MDBCardImage src='/assets/pizza.jpg' alt="Sample photo" className="rounded-start" fluid />
                    </MDBCol>
                    <MDBCol md='6' >
                        <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                            <h3 className="mb-5 text-uppercase fw-bold">Registration Form</h3>
                            <MDBInput wrapperClass='mb-4' required value={username} label='Full Name' size='lg' id='form3' type='text' onChange={handleChange('username')} />
                            <MDBInput wrapperClass='mb-4' required value={password} label='Password' size='lg' id='form3' type='text' onChange={handleChange('password')} />
                            <MDBInput wrapperClass='mb-4' required value={phonenumber} label='Phone' size='lg' id='form5' type='text' onChange={handleChange('phone')} />
                            <MDBInput wrapperClass='mb-4' required value={email} label='Email' size='lg' id='form' type='text' onChange={handleChange('email')} />
                            <MDBInput wrapperClass='mb-4' required value={adress} label='Enter youre address' size='lg' id='form' type='text' onChange={handleChange('location')} />
                            <div>
                                <select required value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option >Select Option</option>
                                    <option value="user" >User</option>
                                    <option value="driver">Driver</option>
                                    <option value="owner">Restaurant Owner</option>
                                </select>
                            </div>
                            {
                                showDriever ?
                                    < >
                                        <div >
                                            <div>
                                                <MDBInput wrapperClass='mb-4' required value={carnumber} label='Enter youre address' size='lg' id='form' type='text' onChange={handleChange('car_number')} />
                                            </div>
                                        </div>
                                    </>
                                    : ""
                            }
                            <div className="d-flex justify-content-end pt-3">
                                <MDBBtn color='light' size='lg' >Reset all</MDBBtn>
                                <MDBBtn type='submit' className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Link to='/signup' style={{ color: '#393f81' }}>Sign in.</Link></p>


                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Signup;