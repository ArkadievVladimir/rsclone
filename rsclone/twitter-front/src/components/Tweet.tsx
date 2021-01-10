import React from 'react';
import classNames from 'classnames';
import { useHomeStyles } from '../pages/Home/theme';
import { 
    Avatar,
    IconButton,
    Paper,
    Typography,
    } from '@material-ui/core';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import { Link, Route } from 'react-router-dom';

interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullName: string;
        userName: string;
        avatarUrl: string;
    }
}

export const Tweet: React.FC<TweetProps> = ({ _id, text, user, classes }: TweetProps): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
        <Paper 
        className={classNames(classes.tweet, classes.tweetsHeader)}
        variant="outlined" >
             <Avatar alt="Ava"
                className={classes.tweetAvatar}
                src={user.avatarUrl} />
            <Typography>
                <b>{user.fullName}</b>
                <span className={classes.tweetsUserName}>@{user.userName}</span>
                <span className={classes.tweetsUserName}></span>
                <span className={classes.tweetsUserName}>1 ч.</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
                {text}
            </Typography>
            <div className={classes.tweetFooter}>
                <div>
                    <IconButton color="primary">
                        <ChatBubbleOutlineOutlinedIcon style={{fontSize: 16}} />
                    </IconButton>
                    <span style={{fontSize: 14}}>1</span>
                </div>
                <div>
                    <IconButton color="primary">
                        <RepeatOutlinedIcon style={{fontSize: 16}} />
                    </IconButton>

                </div>
                <div>
                    <IconButton color="primary">
                        <FavoriteBorderOutlinedIcon style={{fontSize: 16}} /> 
                    </IconButton>                                  
                </div>
                <div>
                    <IconButton color="primary">
                        <ReplyOutlinedIcon style={{fontSize: 16}}/> 
                    </IconButton>                                   
                </div>
            </div>  
    </Paper>
    </Link>
    )
}
