import React from "react";




const Card = (props) => {


    return (
        <>
            <div className="col-lg-5 col-xxl-3 col-xl-4 col-sm-10 col-md-5  col-12 mx-auto Abhishek">
                <div className="card cardZZZ">
                    <img src={props.imgsrc} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={props.link}  className="btn btn-outline-danger">Visit Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;