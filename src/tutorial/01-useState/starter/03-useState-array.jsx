import { React, useState } from 'react';

import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  return <div>
    {people.map((person) => {
      const{id, name} = person
      return<dev key={id}>
        {name}
      </dev>
    })}
  </div>
};

export default UseStateArray;
