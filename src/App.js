import { Component } from 'react';
import './App.css';
import data from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';



export default class App extends Component {

  state = {
    filteredHorns: '',
    filteredKeyword: '',
    filteredData: '',
  };

  handleHornChange = (e) => {
    this.setState({ filteredHorns: e.target.value })
  };

  handleKeywordChange = (e) => {
    this.setState({ filteredKeyword: e.target.value })
  };

  handlefilteredDataChange = (e) => {
    this.setState({ filteredData: e.target.value })
  };


  render() {
    let filteredHorns = data;
    console.log(filteredHorns)
    if(this.state.filteredHorns) {
      filteredHorns = filteredHorns.filter( creature => Number(this.state.filteredHorns) === creature.horns)
      console.log(filteredHorns)
    } 

    let filteredKeyword = data;
    console.log(filteredKeyword)
    if(this.state.filteredKeyword ) {
      filteredKeyword = filteredKeyword.filter( creature => this.state.filteredKeyword === creature.keyword)
      console.log(filteredHorns)
    } 

    let filteredData = data;
    const objectData = Object.keys(filteredData);
    console.log(filteredData)
    if(this.state.filteredData) {
      filteredData = filteredData.filter( booger => this.state.filteredData === booger.objectData)
    } 



  return (
    <div>
      <Header />
      <ImageList data={ filteredHorns, filteredKeyword, filteredData } />
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
    <form>
        <label>
          <select onChange={this.handleKeywordChange}>
            <option value=''>All</option>
            <option value='narwhal'>Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>UniLego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='chameleon'>Chameleon</option>
            <option value='lizard'>Lizard</option>
            <option value='dragon'>Dragon</option>
          </select>
      </label>
    </form>
    <form>
        <label>
          <select onChange={this.handlefilteredDataChange}>
            {
              objectData.map(booger => <option> { objectData } </option> )
            }

              
            {/* <option value=''>All</option>
            <option value=''></option> */}
          </select>
      </label>
    </form>
    </div>
  );
}
}

