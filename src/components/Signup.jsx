import React from 'react';
import Form from './Form';

const Signup = () => {
    const inputs = [
      {
        name: "userName",
        placeholder: "username",
        defaultValue: "",
        validation: {
          required: "Please put your username.",
        },
      },
      {
        name: "password",
        placeholder: "Password",
        defaultValue: "",
        validation: {
          required: "Required",
          minLength: {
            value: 5,
            message: "Password must be at least 5 characters",
          },
        },
      },
    ];
  
    return (
        <Form inputs={inputs} buttonText="Sign Up" heading="Hello there" />
       
    );
  };
  
  export default Signup;