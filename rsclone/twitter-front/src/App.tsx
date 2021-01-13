import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/Home';
// import { Layout } from './pages/Layout';
import { SignIn } from './pages/Signin';
import { UserPage } from './pages/User';
import { AuthApi } from './services/api/authApi';
import { fetchUserData, setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import { useHomeStyles } from './pages/Home/theme';

function App() {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.LOADING && loadingStatus !== LoadingStatus.NEVER;
 


  React.useEffect(() => {
    if(!isAuth && isReady) {
      history.push('/signin')
    } else {
      history.push('/home')
    }
  },[isAuth, isReady])


  React.useEffect(() => {
    dispatch(fetchUserData())
  },[])

  if(!isReady) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color='primary' style={{width: 80, height: 80}}/>
      </div>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        {/* <Layout> */}
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        {/* </Layout> */}
        
      </Switch>
    </div>
  );
}

export default App;
