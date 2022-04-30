import React from 'react'
import { useState } from 'react';
import './signup.css'
export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h3>Welcome aboard {name}!!</h3>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>Register</h1>
<hr />
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">Full Name</label>
<input onChange={handleName} className="input"
value={name} type="text" placeholder='Enter your name here ...' />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" placeholder='Enter your email ...' />

<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" placeholder='Enter Password' />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
<hr /><br />
 <p className='login-text>'>Already have an account? &nbsp; <span>Sign in</span></p>
</div>
);
}