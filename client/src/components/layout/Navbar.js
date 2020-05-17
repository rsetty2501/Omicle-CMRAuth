import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="z-depth-3">  {/* Creating a shadow below the bar */}
                    <div className="nav-wrapper white">
                        <BrowserRouter>
                        <Link to="/" style={{fontFamily: "monospace", color:"#37474f"}} className="col s12 brand-logo center">
                            Omicle
                        </Link>
                        </BrowserRouter>

                    </div>

                </nav>
            </div>
        );  
    }
}

export default Navbar;