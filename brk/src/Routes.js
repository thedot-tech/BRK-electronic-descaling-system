
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Landing from "./Page/Landing"
import About from "./Page/About"
import Howitworks from "./Page/Howitworks"
import Whyus from "./Page/Whyus"
import Contacts from "./Page/Contacts"

import AgencyPage from "./Page/AgencyLandingPage"


const Routes = () => {
    return(

        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={AgencyPage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/how" exact component={Howitworks}/>
                <Route path="/why" exact component={Whyus}/>
                <Route path="/contacts" exact component={Contacts}/>


            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;