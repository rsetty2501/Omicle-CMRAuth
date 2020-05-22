import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux'; {/* connects between component and the store */}
import classnames from "classnames";

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            errors:""
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push("/LogisticCMR"); // On successful login, push user to CMR form page
        }

        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();

        const userData = {
            email : this.state.email,
            password : this.state.password
        };
        
        this.props.loginUser(userData);
    };

    render(){
        const { errors } = this.state;
        return(
            <div className="container">
            <div className="row"> {/* Parent div with row classname*/}
                <div className="row" style={{height:"30px"}}> {/* Row 1 with height 30px and occupying the whole column, No text*/}
                    <div className="col s12"></div>
                </div>

                {/* Row 2 will have 3 segments (Total 12 columns):
                    1. Small screen - 1 column. Large screen - 3 columns. White space
                    2. Small screen - 10 columns. Large screen - 6 columns. Sign in data
                    3. Small screen - 1 column. Large screen - 3 columns. White space
                */}
                <div className="row">
                    <div className="col s1 l3"></div> {/* Part 1*/}

                    <div className="col s10 l6"> {/* Part 2*/}
                        <div className="z-depth-2" style={{width:"100%",height:"600px",border:"1px solid #bdbdbd"}}>
                            <br/>
                            {/* Sign in text*/}
                            <div style={{fontFamily:"Serif",fontSize:"30px",color:"#37474f"}}>
                                Sign in to your account
                            </div>

                            <br/>
                            <br/>

                            {/* Google or Facebook Sign in button*/}
                            <div className="row">
                                <div className="col s12 l6"> {/* Google Sign in*/}
                                    <Link to="/google" style={{width: "83%",
                                        height:"35px",
                                        borderRadius: "2px",
                                        letterSpacing: "1.5px",
                                        marginBottom: "6px"}} 
                                        className="btn waves-effect waves-light hoverable blue-grey lighten-3">
                                        <i className="fa fa-google fa-fw"></i> 
                                        Sign in
                                    </Link> {/* Margin bottom added to create a gap when the screen gets small between the 2 buttons*/}
                                </div>
                                
                                <div className="col s12 l6"> {/* Facebook Sign in*/}
                                    <Link to="/facebook" style={{width: "83%",
                                        height:"35px",
                                        borderRadius: "2px",
                                        letterSpacing: "1.5px"}} 
                                        className="btn waves-effect waves-light hoverable blue-grey lighten-3">
                                        <i className="fa fa-facebook fa-fw"></i>
                                        Sign in
                                    </Link>
                                </div>
                            </div>

                            {/* or line*/}
                            <div className="row">
                                <div className="col s5 l5" style={{width: "40%",
                                            borderTop:"1px solid #bdbdbd",
                                            marginLeft:"5.5%",
                                            marginTop:"10px"}} >
                                </div>

                                <div className="col s1 l1" style={{color:"#37474f"}}>
                                    or
                                </div>

                                <div className="col s5 l5" style={{width: "40%",
                                            borderTop:"1px solid #bdbdbd",
                                            marginTop:"10px"}} >
                                </div>
                            </div>

                            {/* Email and Password part*/}
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                    <input 
                                        type="email"
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                        className= {classnames("", {
                                                    invalid: errors.email || errors.emailnotfound
                                            })}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <span className="red-text">{errors.email} {errors.emailnotfound}</span>
                                </div>
                                <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                    <input 
                                        type="password"
                                        id="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                        className= {classnames("", {
                                                    invalid: errors.password || errors.passwordincorrect
                                            })}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="red-text">{errors.password} {errors.passwordincorrect}</span>
                                </div>
                                <div className="input-field col s12">
                                    <button
                                        type="submit"
                                        style={{ width: "95%", marginLeft:"1px",
                                            borderRadius: "2px",
                                            letterSpacing: "1.5px"}}
                                        className="btn waves-effect waves-light hoverable blue-grey lighten-3"
                                        >
                                        Submit
                                    </button>
                                </div>
                            </form>

                            {/* Forgot password?*/}
                            <div className="col s12" style={{textAlign:"left", marginLeft:"4%"}}>
                                <Link to="/forgotPswd" style={{color:"#455a64"}}>
                                    Forgot password?
                                </Link>
                            </div>

                            <br/>
                            {/* or line*/}
                            <div className="row">
                                <div className="col s5 l5" style={{width: "40%",
                                            borderTop:"1px solid #bdbdbd",
                                            marginLeft:"5.5%",
                                            marginTop:"10px"}} >
                                </div>

                                <div className="col s1 l1" style={{color:"#37474f"}}>
                                    or
                                </div>

                                <div className="col s5 l5" style={{width: "40%",
                                            borderTop:"1px solid #bdbdbd",
                                            marginTop:"10px"}} >
                                </div>
                            </div>

                            {/* Link to register*/}
                            <div className="col s12" style={{textAlign:"left", marginLeft:"4%",color:"#455a64"}}>
                                New to Omicle? 
                                <Link to="/register" style={{color:"#263238"}}>
                                    Join now
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col s1 l3"></div> {/* Part 3*/}
                </div>

            </div>

            </div>
            
        );  
    }
}

Homepage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser }) (Homepage);