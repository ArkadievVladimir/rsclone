import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout';
import { SignIn } from './pages/Signin';
import { UserPage } from './pages/User';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import { useHomeStyles } from './pages/Home/theme';
import { ActivatePage } from './pages/ActivatePage';
import { UserSideProfile } from './components/UserSideProfile';
import { Footer } from './components/Footer';

function App() {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
 
  React.useEffect(() => {
    dispatch(fetchUserData());
  },[dispatch]);

  React.useEffect(() => {
    if(!isAuth && isReady) {
      history.push('/signin');
    } else {
      history.push('/home');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isAuth, isReady]);

  if(!isReady) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color='primary' style={{ width: 80, height: 80 }}/>
      </div>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/user/activate/:hash" component={ActivatePage} />
        </Layout>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
