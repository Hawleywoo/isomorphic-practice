import React from 'react';
import { connect } from 'react-redux'

const AppDisplay = () => {
    <div>
        <h1>
            Isomorphic react {test}
        </h1>
    </div>
};

const mapStateToProps = ( state, ownProps ) => {
    return {
        ...state
    }
}
// export default AppDisplay;
export default connect(mapStateToProps)(AppDisplay);