import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";


const Service = () => {
    return (
        <>
            <div className="my-5 text-center">
                <h1>OUR SERVICES</h1>
            </div>


            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">



                        <div className="row gy-2">


                            { Sdata.map((val, index) => {
                               return <Card 
                                   imgsrc={val.imgsrc}
                                   title={val.title}
                                   link={val.link}
                                   key={index}
                               />
                                
                            })
                        }


                        </div>
                    </div>





                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Service;