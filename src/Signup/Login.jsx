import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "../image/contact.svg";
const Login = () =>{

        const clicked = () =>{
            return(
                alert("Login In Sucess")
            )
        }



    return(
        <>
            <div className="LoginHolder">
                <div className="text-center">
                    <h1>Login Page</h1>
                </div>


                <div className="container">
                    <div className='row'>
                        <div className="col-12 col-md-10 col-lg-6 mx-auto">

                            <form className="Login_form">
                                <input type="text"  name="Username"  className="text-center mt-2 py-1"  placeholder="Enter Your Username"></input>
                                <input type="password" name="Password"  className="text-center mt-2 py-1"  placeholder="Enter Your password"></input>
                                <button className="btn-outline-success mx-auto mt-5" onClick={clicked}><NavLink to="/service">LOGIN</NavLink></button>
                            </form>

                        </div>
                    </div>
                </div>

                <div className="col-12  col-md-10 col-lg-8 mx-auto">
                    <img src={Contact} className="img-fluid loginimg" alt="Not found"/>
                </div>
            </div>    
            
        </>
    )
}
 
export default Login;