import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Security from "../image/security.svg";

const Sign_up = () =>{
    const [fullname,setfullname] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
    })


    const clicked = () =>{
        return(
            alert(`You Have Signed Up Sucessfully Press Ok Now!!`)
        )
    } 


    const eventOccured = (event) =>{
        const {name,value} = event.target;

        setfullname((preValue)=>{
            return {
                ...preValue,
                [name]:value,
            }
        })
    }

    return(
        <>
        <div className="SignUpHolder "> 
        <div className="text-center signhead">
            <h1>SIGN UP</h1>
        </div>

        <div className="container ">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-6 mx-auto">

                <form className=" signinInputHolder">
                    <input type="text" className="my-2 text-center py-1" value={fullname.firstname}  onChange={eventOccured}  placeholder="Enter Your Firstname " name="fname"  required/>
                    <input type="text" className="my-2 text-center py-1" value={fullname.lastname}  onChange={eventOccured}  placeholder="Enter Your Lastname " name="lname"  required/>
                    <input type="email"  className="my-2 text-center py-1" value={fullname.email}  onChange={eventOccured} placeholder="Enter Your Email " name="email" required />
                    <input type="password"  className="my-2 text-center py-1"  onChange={eventOccured}  placeholder="Enter a unique Password" name="userpassword" required />
                    <input type="password"  className="my-2 text-center py-1"   onChange={eventOccured} placeholder="Confirm Password" name="ConfirmPassword" required />
                  <NavLink to="/service"  onClick={clicked}  className="SigninBtn text-center text-decoration-none btn-outline-warning font-weight-bold">Submit</NavLink>
                </form>

                </div>
            </div>
        </div>

        <div className="col-12  col-md-10 col-lg-8 mx-auto">
                    <img src={Security} className="img-fluid signimg" alt="Not found"/>
                </div>

        </div>
        </>
    )
}

export default Sign_up;