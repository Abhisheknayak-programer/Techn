import React from "react";
import BlogData from "./BlogData";
import BlogCard from "./Blog_card";
import Footer from "./Footer";

const Blogs = () =>{
    return(
        <>
        <div className="text-center bg-light">
        <h1>Tech Blog</h1>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-10 mx-auto">
                    
                    {BlogData.map((val,index)=>{
                        return <BlogCard imgsrc={val.imgsrc} link={val.link} paragraph={val.paragraph} heading={val.heading} key={index}  />
                    })}


                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Blogs;













// <div className="box my-5 d-flex align-items-center justify-content-around">
// <div className="row">


//     <div className="col-6 col-lg-4 col-md-4">
//     <img src={Img} className="img-fluid blog_img" alt="not found" />
//     </div>

//     <div className="col-6 col-lg-4 my-auto mx-auto">
//         <h1>Machine learning</h1>
//         <p>Machine is a mechanical structure that uses power to apply forces and control movement to person an intend action.</p>
//     </div>

//     <div className="col-6 col-lg-4 my-auto">
//     <button className="btn-outline-info blogbtn"><a href="https://techdaytodays.blogspot.com/2020/07/machine-learning.html" >Read More</a></button>
//     </div>



// </div>
// </div>
