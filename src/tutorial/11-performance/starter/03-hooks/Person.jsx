const Person = ({ name, id, removePerson }) => {
  const onRemovePerson = () => removePerson(id)
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={onRemovePerson}>remove</button>
    </div>
  );
};
export default Person;
