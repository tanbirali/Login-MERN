import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://vercel.com/tanbirali/login-mern-api/ENcby5eYpqKuYWDHmkysic4hPZxx/register', {name, email, password})
        .then(result => {
            console.log(result)
            navigate('/login')
        })
        .catch(error => console.log(error))
        
    } 


  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'>
                        <strong>Name</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}/>
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter your email'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}/>
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input
                    type='password'
                    placeholder='Enter your password'
                    name='name'
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}/>
                    
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                </button>
            </form>
            <p>Already have an account</p>
            <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                Login
            </Link>

        </div>

    </div>
  )
}

export default Register