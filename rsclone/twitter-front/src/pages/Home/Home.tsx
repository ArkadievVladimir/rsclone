import React from 'react';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Tweet } from '../../components/Tweet';
import { Sidebar } from '../../components/Sidebar';
import { UserSideProfile } from '../../components/UserSideProfile';
import { homeComponentWords } from '../../languages';

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let homeComponentWordsPreset: Array<string> = homeComponentWords.map((item) => {
    return item[index];
  });

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
            <Paper className={classes.tweetsWrapper} variant='outlined'>
                <Paper className={classes.tweetsHeader} variant='outlined'>
                <Route path='/home/:any'>
                    <BackButton />
                </Route>
                
                <Route path={['/home', '/home/search']} exact>
                    <Typography variant="h6">{homeComponentWordsPreset[0]}</Typography>  
                </Route>

                <Route path='/home/tweet' >
                    <Typography variant="h6">{homeComponentWordsPreset[1]}</Typography>  
                </Route> 
                </Paper>

                <Route path={['/home', '/home/search']} exact >
                <Paper>
                    <div className={classes.addForm}>
                        <AddTweetForm classes={classes} />
                    </div>
                    <div className={classes.addFormBottomLine}></div>
                </Paper>
                </Route>

                <Route path='/home' exact>
                    {isLoading ? (
                        <div className={classes.tweetsWrapper}>
                            <CircularProgress />
                        </div>
                    ) : (
                        tweets.map((tweet) => 
                        <Tweet
                        key={tweet._id}
                        classes={classes}
                        images={tweet.images}
                        {...tweet}
                        />)
                    )}
                </Route>
                <Route path='/home/tweet/:id' component={FullTweet} exact />
            </Paper>
    );
};
