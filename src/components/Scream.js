import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//MUI  stuff
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const styles = {
    card:{
        display: 'flex',
        marginBottom:20
    },
    image:{
        minWidth:150
    },
    content:{
        padding:25
    }
}

class Scream extends Component {
    render() {
        dayjs.extend(relativeTime)
         // eslint-disable-next-line
        const { classes ,scream :{body ,userImage, createdAt, userHandle, screamId, likeCount, commentCount}} = this.props
        return (
       <Card className= {classes.card}>
           <CardMedia image= {userImage} 
           title = "Profile image" className={classes.image}/>
           <CardContent className={classes.content}>
        <Typography variant="h5" component={Link} to = {'/users/'+userHandle} color= "primary">{userHandle}</Typography>
        <Typography variant="body2" color="textSecondary">{ dayjs(createdAt).fromNow() }</Typography>
        <Typography variant="body2">{ body }</Typography>
           </CardContent>
       </Card>
        )
    }
}

export default withStyles(styles)(Scream);
