import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something
    console.log(name)
    //if no value, do nothing
    if (!name) return
    //if value is true, setup new user and add to the current users
    const fakeId = Date.now() // don't write code like this in the actual project
    console.log(fakeId)
    const newUser = {id:fakeId, name}
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    //set back to empty
    setName('')
    // To confirm if the form is submitted or not
    console.log('Form is submitted')
  }

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className='btn'>
              Remove
            </button>
          </div>
        )
      })}
    </div>
  );
};
export default UserChallenge;
