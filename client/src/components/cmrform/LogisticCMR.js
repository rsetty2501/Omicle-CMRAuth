import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { logoutUser } from '../../actions/authActions';
import { connect } from 'react-redux'; {/* connects between component and the store */}

class LogisticCMR extends Component {

    onLogoutClick = (event) => {
        event.preventDefault();
        this.props.logoutUser();
    };
    

    render() {
        {/* The below return needs to be changed. This is where the actual CMR form will come */}
        const { user } = this.props.auth;

        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
        );
    }
}

LogisticCMR.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser }) (LogisticCMR);
