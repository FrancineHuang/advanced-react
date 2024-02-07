import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read books'
  })
  // const [name, setName] = useState('Peter')
  // const [age, setAge] = useState(24)
  // const [hobby, setHobby] = useState('Read books')

  const displayPerson = () => {
    // setName('John')
    // setAge(23)
    // setHobby('Scream at the computer')
    // setPerson = ({
    //   name: 'John',
    //   age: 23, hobby:
    //   'Scream at the computer' })
    setPerson({ ...person, name: 'Susan' })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show John
      </button>
    </>
  )
};

export default UseStateObject;
