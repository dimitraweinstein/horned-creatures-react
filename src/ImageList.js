import React, { Component } from 'react'
import images from './data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <div>
                {images.map(image => 
                <ImageItem url={image.url}/>
                )
                }
            </div>
        )
    }
}
