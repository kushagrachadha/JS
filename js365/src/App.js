import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from "./Approutes.js";
import AppHeader from "./Appheader/Appheader"
import {BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import isMobile from "./isMobile/IsMobile";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
  console.log(this.props)
    return (
      <Router>
        <AppHeader/>
        <div className={!this.props.isMobile?"margin-30":""}>
          <AppRoutes/>
          </div>
          </Router>
        );
  }
}
  
export default isMobile(App);
