import React from "react";
import ErrorImg from "../src/image/error.svg"; 
import Back from "./Goback";
import Footer from "./Footer";

const Error = () =>{

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 col-lg-6 mx-auto">
                        <img src={ErrorImg} className="img-fluid img" alt="no img"/>
                </div>
            </div>
        </div>
        <Back/>
        <Footer/>
        </>
    )
}

export default Error;