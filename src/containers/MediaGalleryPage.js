/**
 * Created by Edge on 6/3/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import {
    selectImageAction,
    searchMediaAction,
    selectVideoAction
} from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';
import PropTypes from 'prop-types';

// MediaGalleryPage Component
class MediaGalleryPage extends React.Component {

    // We want to get images and videos from the API right after our component renders.
    componentDidMount() {
        this.props.dispatch(searchMediaAction('rain'));
    }
    handleSelectImage(selectedImage) {
        this.props.dispatch(selectImageAction(selectedImage));
    }
    handleSelectVideo(selectedVideo) {
        this.props.dispatch(selectVideoAction(selectedVideo));
    }
    handleSearch(event) {
        event.preventDefault();
        if (this.query !== null) {
            this.props.dispatch(searchMediaAction(this.query.value));
            this.query.value = '';
        }
    }

    render() {
        const { images, selectedImage, videos, selectedVideo } = this.props;
        return (
            <div className="container-fluid">
                {images && selectedImage? <div>
                        <input
                            type="text"
                            ref={ref => (this.query = ref)}
                        />
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Search Library"
                            onClick={this.handleSearch}
                        />
                        <div className="row">
                            <PhotoPage
                                images={images}
                                selectedImage={selectedImage}
                                onHandleSelectImage={this.handleSelectImage}
                            />
                            <VideoPage
                                videos={videos}
                                selectedVideo={selectedVideo}
                                onHandleSelectVideo={this.handleSelectVideo}
                            />
                        </div>
                    </div> : 'loading ....'}
            </div>
        );
    }
}

MediaGalleryPage.propTypes = {
    images: PropTypes.array,
    selectedImage: PropTypes.object,
    videos: PropTypes.array,
    selectedVideo: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ images, videos }) => ({
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: images.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);