import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
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
    const robotsField = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (
        <div className="tc">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
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
}

export default App;
