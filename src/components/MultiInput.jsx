import React, { useState } from 'react'


const MultiInput = () => {
    const [formData, setformData] = useState({
        fname:'',
        password:'',
        email:'',
        age:'',
        address:'',
        description:'',
    });

    const onChangehandler = (e) => {
        const {name, value} = e.target;

        setformData({...formData, [name]:value}) // will replace our added data with formData object
    };
    const handleForm = (e) => {
        e.preventDefault(); 
        alert(`Form submitted successfully`);

        console.log(formData);
         
        setformData({
        fname:'',
        pass:'',
        email:'',
        age:'',
        address:'',
        description:'',
    });
    }
    return (
        <>
            <h2>Multiple Input Handling</h2>

            <form onSubmit={handleForm}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="fname">Name: </label>
                    <input value={formData.fname} name="fname" type="text" placeholder="Enter Name" onChange={onChangehandler} />
                    <p>{formData.fname}</p>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="pass">Password: </label>
                    <input value={formData.pass} name="pass" type="password" placeholder="Enter Password" onChange={onChangehandler} />
                    {/* <p>{password}</p> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email: </label>
                    <input value={formData.email} name="email" type="email" placeholder="Enter Email" onChange={onChangehandler} />
                    {/* <p>{email}</p> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="age">Age: </label>
                    <input value={formData.age} name="age" type="number" placeholder="Enter Age" onChange={onChangehandler} />
                    {/* <p>{age}</p> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="address">Address: </label>
                    <input value={formData.address} name="address" type="text" placeholder="Enter Address" onChange={onChangehandler} />
                    {/* <p>{address}</p> */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="description">Description: </label>
                    <textarea value={formData.description} name="description" rows="4" placeholder="Enter description" onChange={onChangehandler} ></textarea>
                    {/* <p>{description}</p> */}
                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </>
    )
}

export default MultiInput