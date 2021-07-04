
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Landing from "./Page/Landing"
import About from "./Page/About"
import Howitworks from "./Page/Howitworks"
import Whyus from "./Page/Whyus"
import Contacts from "./Page/Contacts"

import AgencyPage from "./Page/AgencyLandingPage"
// Admin Dashboard
import AdminDash from "Page/Admin/AdminDash";


import ReactGA from 'react-ga';
ReactGA.initialize('UA-198166927-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Routes = () => {
    return(

        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={AgencyPage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/how" exact component={Howitworks}/>
                <Route path="/why" exact component={Whyus}/>
                <Route path="/contacts" exact component={Contacts}/>

                <Route path="/agriculture" exact component={Contacts}/>



                <Route path="/brk/admin" exact component={AdminDash}/>



            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;