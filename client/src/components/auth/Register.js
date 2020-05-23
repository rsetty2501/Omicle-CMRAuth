import classnames from "classnames";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import { registerUser } from '../../actions/authActions';
import { connect } from 'react-redux'; {/* connects between component and the store */}



class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:""
        };
    }

    componentWillMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/LogisticCMR");
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({
                errors : nextProps.errors
            });
        }
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        
        this.props.registerUser(newUser, this.props.history);
    }

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
                                    Create your account
                                </div>

                                <br/>
                                <br/>

                                {/* Email and Password part*/}
                                {/* classname="red-text" is from materialize.css website for red text color */}
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="text"
                                            id="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                            className= {classnames("", {
                                                    invalid: errors.name
                                            })}
                                        />
                                        <label htmlFor="name">Name</label>
                                        <span className="red-text">{errors.name}</span> 
                                    </div>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            error={errors.email}
                                            className= {classnames("", {
                                                    invalid: errors.email
                                            })}
                                        />
                                        <label htmlFor="email">Email Address</label>
                                        <span className="red-text">{errors.email}</span> 
                                    </div>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            error={errors.password}
                                            className= {classnames("", {
                                                    invalid: errors.password
                                            })}
                                        />
                                        <label htmlFor="password">Password</label>
                                        <span className="red-text">{errors.password}</span> 
                                    </div>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="password"
                                            id="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                            error={errors.password2}
                                            className= {classnames("", {
                                                    invalid: errors.password2
                                            })}
                                        />
                                        <label htmlFor="password2">Confirm Password</label>
                                        <span className="red-text">{errors.password2}</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <button
                                            type="submit"
                                            style={{ width: "95%", marginLeft:"1px",
                                                borderRadius: "2px",
                                                letterSpacing: "1.5px"}}
                                            className="btn waves-effect waves-light hoverable blue-grey lighten-3"
                                            >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>

                                <div style={{fontFamily:"Serif",fontSize:"20px",color:"#37474f"}}>
                                    <p>
                                        Already have an account? 
                                        <Link to="/">
                                            Login
                                        </Link>
                                    </p>
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


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser }) (withRouter(Register));