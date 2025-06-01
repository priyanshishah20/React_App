import React, { useState } from 'react'

const Form = () => {
    const [fName, setfName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(`Form submitted successfully! 
            Details: ${fName}, ${password}, ${email}`);
        setfName('');
        setPassword('');
        setEmail('');
    }

    return (
        <>
            <h2>Form Handling</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="fName">Name: </label>
                    <input value={fName} type="text" placeholder="Enter Name" onChange={(e) => setfName(e.target.value)} />
                    {/* <p>{fName}</p> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="pass">Password: </label>
                    <input value={password} type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    {/* <p>{password}</p> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email: </label>
                    <input value={email} type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                    {/* <p>{email}</p> */}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form