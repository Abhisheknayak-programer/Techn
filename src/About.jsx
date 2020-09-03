import React from "react";
import Common from "./Common";
import Web from "../src/image/cartoon 3.svg";

const About = () => {
    return (
        <>
            <Common imgsrc={Web} btntext="JOIN US" link="/login" text={<h1>WELCOME ABOUT PAGE</h1>}
                extras={<><h5>Our Company Provides You To Develop Your Own Dynamic Website </h5>
                    <h6>Here You Can Build Your E-Commerce Website,Blog Website And Many More</h6></>} />
        </>
    )
}

export default About;