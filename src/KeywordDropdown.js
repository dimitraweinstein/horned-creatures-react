
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
                        </label>
                //     </select>
                // </label>
        )
    }
} */





