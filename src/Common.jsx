import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center bg-light">
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-10 mx-auto">



                            <div className="row">


                                <div className="col-md-10 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column mx-md-auto mx-sm-auto">
                                    <h1>{props.text}</h1>
                                    <h4>Boost Your Buisness With High Quality Website designs</h4>
                                    <h5>We are the team of talented developers making websites</h5>
                                    {props.extras}
                                    <div className="btn mt-3">
                                        <button className="btn-outline-primary"><NavLink to={props.link} activeClassName="getStartedBtn">{props.btntext}</NavLink></button>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-10 mx-md-auto order-1 order-2">
                                    <img src={props.imgsrc} className="img-fluid img" alt="no img" />
                                </div>



                            </div>




                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}


export default Common;