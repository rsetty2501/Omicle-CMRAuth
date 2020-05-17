import React, { Component } from "react";
import { Link } from "react-router-dom";


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
        console.log(newUser);
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
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="text"
                                            id="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                        />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            error={errors.email}
                                        />
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            error={errors.password}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="input-field col s12" style={{width: "95%", marginLeft:"3%"}}>
                                        <input 
                                            type="password"
                                            id="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                            error={errors.password2}
                                        />
                                        <label htmlFor="password2">Confirm Password</label>
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

export default Register;