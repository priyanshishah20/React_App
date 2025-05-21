import React from 'react'
import Users from './Users'

const Admin = () => {
    const admin = {
        name: 'Admin',
        id: 'Admin123',
    }
    return (
        <>
            <div>
                <small>Component 1</small>
                <p>rafce - react arrow function export component</p>
                <h3>Admin</h3>
                <p>Admin Name: {admin.name}</p>
                <p>Admin Id: {admin.id}</p>
            </div>
            <br />
            <Users />
        </>
    )
}

export default Admin