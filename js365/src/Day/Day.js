import React from "react";
import {getComponent} from "../Days/components";
import DAYS from "../Constants/days";
class Day extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        document.title=`${DAYS[this.props.match.params.id].title}`;
    }
    render(){
        let Component=getComponent(this.props.match.params.id);
        return (<Component/>)
    }
}

export default Day;