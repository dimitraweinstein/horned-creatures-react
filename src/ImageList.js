import React, { Component } from 'react'
import images from './data.js';

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <img alt='creatures' src={images.url} />
            </div>
        )
    }
}
