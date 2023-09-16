import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
// import { robots } from './robots';

function App() {
  // const [something, funtion that set something] = useState(initial value of something)
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async function () {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const robots = await data.json();
      setRobots(robots);
    })();
  }, []);

  const onSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchField(searchValue);
  };

  const robotsField = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <div className="tc">
      <h1>Loading...</h1>
    </div>
  ) : (
    <React.Fragment>
      <ErrorBoundary>
        <div className="tc">
          <h1>RoboFriends</h1>
          <button onClick={() => setCount(count + 1)}>
            Click me! You clicked {`${count} ${count > 1 ? 'times' : 'time'}`}
          </button>
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
            <CardList robots={robotsField} />
          </Scroll>
        </div>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
