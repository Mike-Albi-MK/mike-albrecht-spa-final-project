import React from 'react';
import Form from './Form';

const Login = () => {
    const inputs = [
      {
        name: "username",
        placeholder: "Username",
        defaultValue: "",
        validation: {
          required: "Username is required.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid username.",
          },
        },
      },
      {
        name: "password",
        placeholder: "Password",
        defaultValue: "",
        validation: {
          required: "Password is required.",
          minLength: {
            value: 5,
            message: "Password must be at least 5 characters",
          },
        },
      },
    ];
  
    return (
      <div className='login-container'>
        <h2>Welcome back!</h2>
            <p>Please fill in your info and resume your journey.</p>
            <Form inputs={inputs} buttonText="Log In" />
      </div>
    );
  };
  
  export default Login;
  