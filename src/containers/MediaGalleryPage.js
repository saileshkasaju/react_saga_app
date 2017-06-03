/**
 * Created by Edge on 6/3/2017.
 */
import React from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';
import PropTypes from 'prop-types';

// MediaGalleryPage Component
class MediaGalleryPage extends React.Component {

    // We want to get images and videos from the API right after our component renders.
    componentDidMount() {
        this.props.dispatch(searchMediaAction('rain'));
    }

    render() {
        console.log(this.props.images, 'Images');
        console.log(this.props.videos, 'Videos');
        console.log(this.props);
        // TODO: Render videos and images here
        return (<div></div>)
    }
}

MediaGalleryPage.propTypes = {

};

const mapStateToProps = ({ images, videos }) => ({
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: images.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);