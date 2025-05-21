import React from 'react'

const Users = () => {
  // declare variable
  const name = 'Priyanshi';
  const age = 25;

  // declare object
  const user = {
    name: 'Dhoni',
    age: 40,
    passion: 'Cricketer',
  }

  return (
    <>
      <div>
        <small>Component 2</small>
        <h3>User</h3>
        <h4>My name is {name} and age is {age}</h4>
      </div>

      <div>
        <h4>Indian Team Player: {user.name} as {user.passion}</h4>
        <p>2+6</p>
        <p>{2 + 6}</p>
      </div>
    </>
  )
}

export default Users