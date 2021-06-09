import React, { Component } from 'react'
import './App.css';




export default class ImageItem extends Component {
    render() {
        console.log(this.props.url)
        return (
            <div>
                <img alt='creatures' src={this.props.url} />
            </div>
        )
    }
}
