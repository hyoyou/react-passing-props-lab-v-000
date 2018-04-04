// import React, { Component }  from 'react';
//
// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList.js';
//
// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }
import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = props =>
  <div className="fruit-basket">
    <Filter
      filters={props.filters}
      handleChange={props.handleChange} />
    <FilteredFruitList
      filter={props.currentFilter}
      fruit={props.fruit} />
  </div>

FruitBasket.defaultProps = {
  fruit: [],
  currentFilter: null,
  filters: [],
  updateFilterCallback: () => {}
}

export default FruitBasket;
