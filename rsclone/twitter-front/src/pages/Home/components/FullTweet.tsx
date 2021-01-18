import { Paper, Avatar, Typography, IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import mediumZoom from 'medium-zoom'
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';
import { ImageList } from '../../../components/ImageList';


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: { id?: string } = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
           dispatch(fetchTweetData(id)); 
        }   

        return () => {
            dispatch(setTweetData(undefined));
        }
    }, [dispatch, id]);

    React.useEffect(() => {
        if (!isLoading) {
            mediumZoom('.tweet-images img');
        }
    },[isLoading])

    if (isLoading) {
        return (
        <div className={classes.tweetsCentered} >
            <CircularProgress />
        </div>
        ); 
    }
    
    if (tweetData) {
        return  <Paper className={classes.fullTweet}>                   
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar 
                        alt="Ava" 
                        className={classes.tweetAvatar}
                        // src={tweetData.user.avatarUrl} 
                    />
                    <Typography>
                        <Link to={`/user/${tweetData.user._id}`}><b>{tweetData.user.fullname}</b>&nbsp; </Link>                
                        <div>
                            <span className={classes.tweetsUserName}>@{tweetData.user.username}</span>&nbsp;
                        </div>
                    </Typography>
                </div> 
                <Typography variant="body1" gutterBottom className={classes.fullTweetText}>
                        {tweetData.text}
                        <div className='tweet-images'>
                           { tweetData.images && <ImageList classes={classes} images={tweetData.images}/>}
                        </div>
                </Typography>
                <Typography>
                    <span className={classes.tweetsUserName}>{format(new Date(tweetData.createdAt),'H:mm', {locale: ruLang})} · </span>
                    <span className={classes.tweetsUserName}>{format(new Date(tweetData.createdAt), 'dd MMM yyyy', {locale: ruLang})}</span>
                </Typography>
                {/* <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}> */}
                <div className={classNames(classes.tweetFooter)}>
                    <IconButton color="primary">
                        <ChatBubbleOutlineOutlinedIcon style={{fontSize: 16}} />
                    </IconButton>
                </div>
            </Paper>
    }
    
    return null;
};
