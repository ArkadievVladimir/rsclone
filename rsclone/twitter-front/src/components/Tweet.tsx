import React from 'react';
import classNames from 'classnames';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import { Avatar, IconButton, Paper, Typography, } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { Link } from 'react-router-dom';
// import { formatDate } from '../utils/formatDate';

interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    // createdAt: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({ 
    _id, 
    text, 
    user, 
    classes,
    // createdAt,
}: TweetProps): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined" >
             <Avatar 
                alt="Ava"
                className={classes.tweetAvatar}
                src={user.avatarUrl} />
        <div>
            <Typography>
                <b>{user.fullname}</b>&nbsp;
                <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                <span className={classes.tweetsUserName}>.</span>&nbsp;
                {/* <span className={classes.tweetsUserName}>{formatDate(new Date(createdAt))}</span> */}
                <span className={classes.tweetsUserName}>1ч</span>
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
        </div> 
    </Paper>
    </Link>
    );
};
