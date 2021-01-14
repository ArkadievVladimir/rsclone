import React from 'react';
import classNames from 'classnames';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Avatar, IconButton, Menu, MenuItem, Paper, Typography, } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { Link, useHistory } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { ImageList } from './ImageList';
import { removeTweet } from '../store/ducks/tweets/actionCreators';
import { useDispatch } from 'react-redux';
import { eventChannel } from 'redux-saga';


interface TweetProps {
    _id: string;
    text: string;
    images?: string[];
    classes: ReturnType<typeof useHomeStyles>;
    createdAt: string;
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
    images,
    createdAt,
}: TweetProps): React.ReactElement => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        history.push(`/home/tweet/${_id}`);
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemove = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        event.preventDefault();
        if (window.confirm("Вы действительно хотите удалить?")) {
            dispatch(removeTweet(_id))
        }
    }

    return (
        <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${_id}`}>
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined" >
             <Avatar 
                alt="Ava"
                className={classes.tweetAvatar}
                src={user.avatarUrl} />
        <div className={classes.tweeetContent}>
            <div className={classes.tweetHeader}>
                <div>
                    <b>{user.fullname}</b>&nbsp;
                    <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                    <span className={classes.tweetsUserName}> · </span>&nbsp;
                    <span className={classes.tweetsUserName}>{formatDate(new Date(createdAt))}</span>
                </div>
                <div>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
 
                    >
                        <MenuItem onClick={handleClose}>
                           Редактировать
                        </MenuItem>
                        <MenuItem onClick={handleRemove}>
                           Удалить твит
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            <Typography variant="body1" gutterBottom>
                {text}
                {images && <ImageList classes={classes} images={images}/>}
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
    </a>
    );
};
