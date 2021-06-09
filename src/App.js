/* eslint-disable no-sequences */
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
    }; 

    let filteredKeyword = data;
    console.log(filteredKeyword)
    if(this.state.filteredKeyword ) {
      filteredKeyword = filteredKeyword.filter( creature => this.state.filteredKeyword === creature.keyword)
      console.log(filteredHorns)
    };

    let filteredData = data;
    const objectData = Object.keys(filteredData);
    console.log(filteredData)
    if(this.state.filteredData) {
      filteredData = objectData.filter( booger => this.state.filteredData === booger.objectData)
    }; 



  return (
    <div>
      <Header />
      <ImageList data={ filteredHorns, filteredKeyword, filteredData } />
      <form>
        <label>
          <select onChange={this.handleHornChange}>
            <option key='0' value=''>All</option>
            <option key='1' value='1'>1</option>
            <option key='2' value='2'>2</option>
            <option key='3' value='3'>3</option>
            <option key='4' value='100'>100</option>
          </select>
      </label>
    </form>
    <form>
        <label>
          <select onChange={this.handleKeywordChange}>
            <option key='5' value=''>All</option>
            <option key='6' value='narwhal'>Narwhal</option>
            <option key='7' value='rhino'>Rhino</option>
            <option key='8' value='unicorn'>Unicorn</option>
            <option key='9' value='unilego'>UniLego</option>
            <option key='10' value='triceratops'>Triceratops</option>
            <option key='11' value='markhor'>Markhor</option>
            <option key='12' value='mouflon'>Mouflon</option>
            <option key='13' value='addax'>Addax</option>
            <option key='14' value='chameleon'>Chameleon</option>
            <option key='15' value='lizard'>Lizard</option>
            <option key='16' value='dragon'>Dragon</option>
          </select>
      </label>
    </form>
    <form>
        <label>
          <select onChange={this.handlefilteredDataChange}>
          {
              objectData.map(booger =>  <option value={objectData}>{objectData.key}</option> )  }

              
            {/* <option value=''>All</option>
            <option value=''></option> */}
          </select>
      </label>
    </form>
    </div>
  );
}
}

