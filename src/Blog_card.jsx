import React from "react";


const Blog_card = (props) =>{
    return (
        <>
        <div className="box my-5 d-flex align-items-center justify-content-around">
                    <div className="row">


                        <div className="col-6 col-lg-4 col-md-4">
                        <img src={props.imgsrc} className="img-fluid blog_img" alt="not found" />
                        </div>

                        <div className="col-6 col-lg-4 my-auto mx-auto">
                            <h1>{props.heading}</h1>
                            <p>{props.paragraph}</p>
                        </div>

                        <div className="col-6 col-lg-4 my-auto">
                        <button className="btn-outline-info blogbtn"><a href={props.link} >Read More</a></button>
                        </div>



                    </div>
                </div>
        </>
    )
}


export default Blog_card;