import React from 'react';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Tweet } from '../../components/Tweet';
import { 
    Grid, 
    InputAdornment,
    Paper,
    Typography,
    Container,
    ListItem,
    Divider,
    ListItemAvatar,
    Avatar,
    ListItemText,
    List,
    Button,
    IconButton,
    } from '@material-ui/core';
import { Sidebar } from '../../components/Sidebar';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTweetsLoading, selectTweets, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Tags } from '../../components/HashTags';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { fetchTags } from '../../store/ducks/tags/actionCreators';


export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch])

    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
            <Grid item sm={1} md={3}>
               <Sidebar classes={classes} />
            </Grid>
            <Grid item sm={8} md={6}>
                <Paper 
                    className={classes.tweetsWrapper}
                    variant="outlined">
                <Paper 
                className={classes.tweetsHeader}
                variant="outlined" >
                {/* <Route path='/home/:any'> */}
                    <BackButton />
                {/* </Route> */}
                {/* <Route path={['/home', '/home/search']} exact> */}
                    <Typography variant="h6">
                        Твиты
                    </Typography>  
                {/* </Route> */}
                {/* <Route path='/home/tweet' > */}
                    <Typography variant="h6">
                        Твитнуть
                    </Typography>  
                {/* </Route>  */}
                </Paper>
                {/* <Route path={['/home', '/home/search']} exact > */}
                <Paper>
                    <div className={classes.addForm}>
                        <AddTweetForm classes={classes} rowsMax={2}/>
                    </div>
                    <div className={classes.addFormBottomLine}></div>
                </Paper>
                {/* </Route> */}
                {/* <Route path="/home" exact> */}
                    {isLoading ? (
                        <div className={classes.tweetsWrapper}>
                            <CircularProgress />
                        </div>
                    ) : (
                        tweets.map((tweet) => 
                        <Tweet
                        key={tweet._id}
                        classes={classes}
                        {...tweet}
                        />)
                    )}
                {/* </Route> */}
                {/* <Route path="/home/tweet/:id" component={FullTweet} exact /> */}
                </Paper>
            </Grid>
            <Grid item sm={3} md={3}>
                <div className={classes.rightSide}>
                    <SearchTextField
                        fullWidth
                        placeholder="Поиск по Твиттеру"
                        inputProps={{
                            startAdorment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Tags classes={classes} />
                    <Paper className={classes.rightSideBlock}>
                        <Paper className={classes.rightSideBlockHeader} variant="outlined">
                            <b>Кого читать</b>
                        </Paper>
                        <List>
                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemAvatar>
                                    <Avatar
                                    alt="Vitaly Zabavsky"
                                    src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Dock of Shame"
                                    secondary={
                                        <Typography component="span" variant="body2">
                                            @FavDocOfShame
                                        </Typography>
                                    }
                                />
                                <Button color="primary">
                                    <PersonAddIcon />
                                </Button>    
                            </ListItem>
                            <Divider component="li" />
                        </List>
                    </Paper>
                </div>
            </Grid>
            </Grid>
        </Container>
    );
};
