import React from "react";
import {Card,Avatar,IconButton,CardHeader,CardMedia,CardContent, Typography,CardActions,Button} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {HOME_DESCRIPTION_LENGTH  as maxlen} from "../../Constants/AppConstants";
import {DARK_COLORS,getRandomColor} from "../../Util/MUIColors";
import {getMonthDateYear} from "../../Util/DateFormatter";
import { Link } from "react-router-dom";
class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
          tempText:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        }
    }
    render(){
        const classes={}
        let colorObj=DARK_COLORS[this.props.content.day%10];
      console.log(this.props)
        return(
            <Card>
                <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor:colorObj.primary,color:colorObj.secondary}}>
            {this.props.content.day}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={this.props.content.title}
        subheader={getMonthDateYear(this.props.content.date)}
      />
      <CardMedia

      className="postcontainer"
      image={this.props.content.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1">
          {`${this.state.tempText.substring(0,maxlen)}...`}
        </Typography>
      </CardContent>
            {/* {JSON.stringify(this.props)} */}
            <CardActions>

      <Link to={`/day/${this.props.identifier}`}>
        <Button size="small" variant="contained"color="primary" >
          View Demo
        </Button>
        </Link>
        <Button size="small" variant="contained" color="secondary">
          View Code
        </Button>
      </CardActions>
            </Card>)
    }
}

export default PostContainer