import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruitList();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruitList = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return(
      <FruitBasket
        filters={this.state.filters}
        handleChange={this.handleFilterChange}
        fruit={this.state.fruit}
        currentFilter={this.state.currentFilter}
      />
    )
  }
}

export default App;
