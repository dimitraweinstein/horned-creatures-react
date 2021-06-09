import { Component } from 'react';
import './App.css';
import data from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';



export default class App extends Component {

  state = {
    filteredHorns: '',
  };

  handleHornChange = (e) => {
    this.setState({ filteredHorns: e.target.value })
  };

  render() {
    let filteredHorns = data;
    console.log(filteredHorns)
    if(this.state.filteredHorns) {
      filteredHorns = filteredHorns.filter( creature => Number(this.state.filteredHorns) === creature.horns)
    }


  return (
    <div>
      <Header />
      <ImageList images={data} />
      <form>
        <label>
          <select onChange={this.handleHornChange}>
            <option value=''>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </select>
      </label>
    </form>
    </div>
  );
}
}

