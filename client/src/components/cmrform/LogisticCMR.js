import React, { Component } from 'react'
import './LogisticCMR.css';
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
        <div className="container">

          <div classname="row" style={{height:"35px"}}>
            <div classname="col s12" ></div>
          </div>

          {/* 1. This is the Header of the form */}
          <table id="headerTable">
            <tr id="headerTabRow">
              <th rowspan="2" style={{width:"20px",
                                    fontSize:"25px",
                                    paddingLeft:"5px",
                                    paddingBottom:"1px",
                                    paddingTop: "1px",
                                    textAlign: "left",
                                    color: "#ffffff"}}>1</th>
              <td id="headerTabData">Exemplar fur den Absender</td>
            </tr>
            <tr id="headerTabRow">
              <td id="headerTabData">Copy for admin</td>
            </tr>
          </table>

          {/* 2. Actual data of the form */}
          <table id="tabData">
            <tr>
              <th class="tabHeader1"> <p>
                Absendersad
                <br/> dasdas
              </p>
              
              </th>
              <th class="tabHeader2">Exemplar fur den Absender</th>
            </tr>
          </table>


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
