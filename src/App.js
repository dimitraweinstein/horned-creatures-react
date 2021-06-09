/* eslint-disable no-sequences */
import { Component } from 'react';
import './App.css';
import data from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';



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


  render() {
    let filteredHorns = data;
    
    if(this.state.filteredHorns) {
      filteredHorns = filteredHorns.filter( creature => Number(this.state.filteredHorns) === creature.horns)
    }; 
    
    if(this.state.filteredKeyword ) {
      filteredHorns = filteredHorns.filter( creature => this.state.filteredKeyword === creature.keyword)
      
    };

      const hornOptions = Array.from(new Set(filteredHorns.map(creature => creature.horns)))
      const keywordOptions = Array.from(new Set(filteredHorns.map(creature => creature.keyword)))


  return (
    <div>
      <Header />
      <Dropdown 
        options={hornOptions}
        handleHornChange={this.handleHornChange}/>
      <Dropdown 
        options={keywordOptions}
        handleKeywordChange={this.handleKeywordChange}/>
      <ImageList data={ filteredHorns } />
      
      
        {/* <label>
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
      </label> */}
    </div>
  );
}
}

