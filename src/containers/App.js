import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
// import { robots } from './robots';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await data.json();
    this.setState({ robots: robots });
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value;
    this.setState({ searchField: searchValue });
  };

  render() {
    const { robots, searchField } = this.state;
    const robotsField = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <div className="tc">
        <h1>Loading...</h1>
      </div>
    ) : (
      <React.Fragment>
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={robotsField} />
          </Scroll>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
