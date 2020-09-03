import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {

    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    });

    

        const EventOccured = (event) =>{
           const {name,value} = event.target;

           setData( (predata) =>{
               return {
                ...predata,
                [name]:value,
               }   
           })
        }


    const formSubmited = (e) =>{
        e.preventDefault();
        return (
            alert(`${data.fullname} Your Form Is Submitted Sucessfully Containing A Message Of ${data.message}. We also save your email ${data.email} for Future Notifications !!!`)
        
        )
      
    }

 


   

    return (
        <>
            <div className="text-center my-2">
                <h1>Contact Us</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-10 mx-auto">


                        <form onSubmit={formSubmited}>

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" value={data.fullname} onChange={EventOccured} name="fullname" className="form-control" placeholder="Enter Your Name"  />
                            </div>

                            <div class="mb-3">
                                <label className="form-label" >Mobile Number</label>
                                <input type="phone" value={data.phone} onChange={EventOccured} name="phone" className="form-control" placeholder="+91" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" value={data.email} onChange={EventOccured} name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                            </div>


                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
                                <textarea className="form-control" value={data.message} onChange={EventOccured} name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>



                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                         </div>
                                </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn  text-center btn-success" type="submit">Submit form</button>
                                </div>


            </form>



                </div>
                    </div>
                </div>
                <Footer/>
        </>
    )
}

export default Contact;