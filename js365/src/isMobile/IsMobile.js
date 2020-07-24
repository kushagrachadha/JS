import React, {Component} from 'react';
import config from "./../config"

export default function isMobile(HocComponent){
    return class extends Component{

        constructor(props) {
            super(props);
            this.state = {
                
            };
        }
        componentDidMount() {
            window.addEventListener("resize", this.resize.bind(this));
            this.resize();
        }
        
        resize() {
            let isMobile=window.innerWidth<=config.maxwidth;
            if(isMobile!==this.state.isMobile){

                this.setState({isMobile});
            }
        }
        
        componentWillUnmount() {
            window.removeEventListener("resize", this.resize.bind(this));
        }
        
        render(){
            let returnObj={...this.props};
            returnObj["isMobile"]=this.state.isMobile;
            return (
                <HocComponent {...returnObj} />
            );
        }
    } 
}