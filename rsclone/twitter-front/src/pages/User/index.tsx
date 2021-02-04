import { Avatar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useHomeStyles } from './../Home/theme';
import './User.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import classNames from 'classnames';
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Tweet } from '../../components/Tweet';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import { User } from '../../store/ducks/user/contracts/state';
import { AuthApi } from '../../services/api/authApi';
import { RouteComponentProps } from 'react-router-dom';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import { userPageWords } from '../../languages';
import engLang from 'date-fns/locale/en-GB';
import espLang from 'date-fns/locale/es';

let lang: object = {};

if (!localStorage.getItem('lang')) {
  lang = ruLang;
} else if (localStorage.getItem('lang') === 'ru') {
  lang = ruLang;
} else if (localStorage.getItem('lang') === 'eng') {
  lang = engLang;
} else if (localStorage.getItem('lang') === 'esp') {
  lang = espLang;
}

let index: number = 0;

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
} else if (localStorage.getItem('lang') === 'eng') {
    index = 1; 
} else if (localStorage.getItem('lang') === 'esp') {
    index = 2; 
}

let userPageWordsPreset: Array<string> = userPageWords.map((item) => {
    return item[index];
});

export const UserPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const classes = useHomeStyles();
  const tweets = useSelector(selectTweetsItems);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTweetsLoading);
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [userData, setUserData] = React.useState<User | undefined>();

  React.useEffect(() => {
    const userId = match.params.id;
      dispatch(fetchTweets());
      if (userId) {
        AuthApi.getuserInfo(userId).then(({ data }) => {
          setUserData(data);
        });
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Paper className={classNames(classes.tweetsWrapper, 'user')} variant='outlined'>
      <Paper className={classes.tweetsHeader} variant='outlined'>
        <BackButton />

        <div>
          <Typography variant='h6'>{userData?.fullname}</Typography>
          <Typography variant='caption' display='block' gutterBottom>
            {userPageWordsPreset[0]} {tweets.length}
          </Typography>
        </div>
      </Paper>

      <div className='user__header'></div>

      <div className='user__info'>
        <Avatar />
        {!userData ? (
          <Skeleton variant='text' width={259} height={30} />
          ) : (
          <h2 className='user__info-fullname'>{userData?.fullname}</h2>
          )}
        {!userData ? (
        <Skeleton variant='text' width={60}/>
        ) : (
        <span className='user__info-username'>@{userData?.username}</span>
        )}
        <p className='user__info-description'>{userPageWordsPreset[1]}</p>
        <ul className='user__info-details'>
          <li>{userPageWordsPreset[2]}</li>
          <li>{userPageWordsPreset[3]} {format(new Date(userData?.createdAt ? userData?.createdAt : 0), 'dd MMM yyyy, HH:mm', { locale: lang })}</li>
        </ul>
      </div>
      <Tabs value={activeTab} indicatorColor='primary' textColor='primary' onChange={handleChange}>
        <Tab label={userPageWordsPreset[4]} />
        <Tab label={userPageWordsPreset[5]} />
        <Tab label={userPageWordsPreset[6]} />
        <Tab label={userPageWordsPreset[7]} />
      </Tabs>
      <div className='user__tweets'>
      {isLoading ? (
                        <div className={classes.tweetsCentered}>
                            <CircularProgress />
                        </div>
                    ) : (
                        tweets.map((tweet) => (
                            <Tweet key={tweet._id} classes={classes} images={tweet.images} {...tweet} />
                        ))
                    )}
      </div>

    </Paper>
  );
};
