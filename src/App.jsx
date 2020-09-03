import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch , Route} from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Blogs from "./Blogs";
import Error from "./Error";
import Login from "../src/Signup/Login";
import Sign_up from "../src/Signup/Signup";



const App = () =>{
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path = "/" component={Home}></Route>
            <Route exact path = "/service" component={Service}></Route>
            <Route exact path = "/about" component={About}></Route>
            <Route exact path = "/blog" component={Blogs}></Route>
            <Route exact path = "/login" component={Login}></Route>
            <Route exact path = "/sign" component={Sign_up}></Route>
            <Route exact path = "/contact" component={Contact}></Route>
            <Route component={Error}></Route>
        </Switch>
        </>
    )
}

export default App;