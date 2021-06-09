
import { Component } from "react";




export default class KeywordDropdown extends Component {
    render() {
        return (
                <label>
                    <select onChange={this.props.handleKeywordChange}>
                    
                        <option key='0' value=''>All</option>
                        {this.props.options
                            .map(optionString => 
                                <option value={optionString}>{optionString}</option>
                        )}
                  </select>
                </label>
        )
    }
}


