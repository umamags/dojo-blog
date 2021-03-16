
const Home = () => {
  const handleClick = (e) => {
    console.log('hello, ninjas', e);
  }
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {
        handleClickAgain('Mahesh');
      }}>Click Me Again</button>
      <button onClick={(e) => handleClickAgain('Mahesh Again', e)}>Click Me Third Time</button>
    </div>
  );
}

export default Home;
