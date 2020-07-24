import React from "react";
import {Card,Avatar,IconButton,CardHeader,CardMedia} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {DARK_COLORS,getRandomColor} from "../../Util/MUIColors";
import {getMonthDateYear} from "../../Util/DateFormatter";
class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={

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
            {/* {JSON.stringify(this.props)} */}
            </Card>)
    }
}

export default PostContainer