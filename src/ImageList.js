import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                {this.props.data.map((image, i) => 
                <ImageItem url={image.url} key={i} />
                )
                }
            </div>
        )
    }
}
