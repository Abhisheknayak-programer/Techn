import React from "react";
import { NavLink } from "react-router-dom";


const Goback = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 col-lg-6 mx-auto">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <br/><br/><br/>
                            <button className="backbtn btn-outline-danger"><NavLink to="/">Go Back</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Goback;