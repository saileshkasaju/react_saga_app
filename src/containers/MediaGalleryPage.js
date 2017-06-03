/**
 * Created by Edge on 6/3/2017.
 */
import React from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';

// MediaGalleryPage Component
class MediaGalleryPage extends React.Component {

    // We want to get images and videos from the API right after our component renders.
    componentDidMount() {
        flickrImages('rain').then(images => console.log(images, 'Images'));
        shutterStockVideos('rain').then(videos => console.log(videos,'Videos'));
    }

    render() {
        // TODO: Render videos and images here
        return (<div></div>)
    }
}

export default MediaGalleryPage;