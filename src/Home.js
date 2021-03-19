import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('mahesh');
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setName('abhinav');
    setAge(30);
    console.log('name set to abhinav');
  }
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {
        handleClickAgain('Mahesh');
      }}>Click Me Again</button>
      <button onClick={(e) => handleClickAgain('Mahesh Again', e)}>Click Me Third Time</button>
    </div>
  );
}

export default Home;
