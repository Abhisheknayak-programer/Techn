import React from "react";

const Footer = () =>{

    let Now = new Date();
    let Year = Now.getFullYear();

    return(
        <>
        <footer className="container-fluid bg-light foot">
            <div className="row">
                <p className="text-center">&copy; Abhishek Nayak @ {Year} | All Rights Reserved !!! </p>
            </div>
        </footer>
        </>
    )
}

export default Footer;