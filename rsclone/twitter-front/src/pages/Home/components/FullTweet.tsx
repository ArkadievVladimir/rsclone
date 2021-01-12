import { Paper, Avatar, Typography, IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tweet } from '../../../components/Tweet';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: {id?: string} = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
           dispatch(fetchTweetData(id)); 
        }   

        return () => {
            dispatch(setTweetData(undefined));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return (
        <div className={classes.tweetsCentered} >
            <CircularProgress />
        </div>
        ) 
    }

    if (tweetData) {
        return  <Paper className={classes.fullTweet}>                   
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar alt="Ava" className={classes.tweetAvatar}
                        src={tweetData.user.avatarUrl} />
                    <Typography>
                        <b>{tweetData.user.fullname}</b>                       
                        <div>
                            <span className={classes.tweetsUserName}>@{tweetData.user.username}</span>
                            <span className={classes.tweetsUserName}>.</span>
                            <span className={classes.tweetsUserName}>1 ч.</span>
                        </div>
                    </Typography>
                    {/* <div className={classes.tweetFooter}>
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
                    </div>  */}
                </div> 
                <Typography variant="body1" gutterBottom className={classes.fullTweetText}>
                        {tweetData.text}
                </Typography>
            </Paper>
    }
    
    return null;
};
