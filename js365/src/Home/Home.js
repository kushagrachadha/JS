import React from "react";
import { Grid, Typography }  from "@material-ui/core";
import DAYS from "../Constants/days"
import PostContainer from "./PostContainer/PostContainer";
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Grid container direction="row"
            justify="center"
            alignItems="center"
            spacing={6}>
                <Grid item xs={12}>
                    <Typography variant="h5">A Small Attempt to Improve at React and JavaScript</Typography>
                </Grid>
                {Object.keys(DAYS).map(item=>(
                    <Grid item lg={3} md={4} sm={6} xs={12}>
<PostContainer identifier={item} content={DAYS[item]}/> 
</Grid>  
                ))}
            </Grid>
        )
    }
}

export default Home;