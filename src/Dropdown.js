import { Component } from "react";




export default class Dropdown extends Component {
    render() {
        return (
                <label>
                    <select onChange={this.props.handleHornChange}>
                    
                        <option key='0' value=''>All</option>
                        {this.props.options
                            .map(optionString => 
                                <option value={optionString}>{optionString}</option>
                        )}
                        {/* <option key='0' value=''>All</option>
                        <option key='1' value='1'>1</option>
                        <option key='2' value='2'>2</option>
                        <option key='3' value='3'>3</option>
                        <option key='4' value='100'>100</option> */}
                    </select>
                </label>
        )
    }
}
