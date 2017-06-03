/**
 * Created by Edge on 6/3/2017.
 */
import React from 'react';
import Header from '../common/Header';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <Header />
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;