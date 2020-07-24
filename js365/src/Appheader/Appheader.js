import React from "react"
import {AppBar, Toolbar, IconButton,Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
class Appheader extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(

            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" className="homebutton" href="/" linkButton={true}>
                    <HomeIcon/>
                </IconButton>
                <Typography variant="h5" className="flex-grow-1">
                    365 Days of Code
                </Typography>
                <IconButton edge="start" color="inherit" href="https://www.linkedin.com/in/kushagra-chadha-025bb7153/" target="_blank" className="gitButton">
                    <LinkedInIcon/>
                </IconButton>
                <IconButton edge="end" color="inherit" href="https://github.com/kushagrachadha" target="_blank" className="gitButton">
                    <GitHubIcon/>
                </IconButton>
            </Toolbar>
                    </AppBar>
        )
    }
}

export default Appheader;