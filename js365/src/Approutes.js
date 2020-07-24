import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Day from "./Day/Day"
class Approutes extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
                <Switch>
                    <Route exact path="/" component={Home} key="Home"/>
                    <Route exact path="/day/:id" component={Day} key="Day"/>
                </Switch>
        )
    }
}

export default Approutes;