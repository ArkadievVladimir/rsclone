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
import { Footer } from './components/Footer';

function App() {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  if (!localStorage.getItem('backGround')) {
    document.body.style.backgroundColor = '#fafafa';
    localStorage.setItem('backGround', '#fafafa');
  } else {
    const curentBackGround = localStorage.getItem('backGround');
    switch (curentBackGround) {
      case '#fafafa': 
        document.body.style.backgroundColor = '#fafafa';
        break;
      case '#b3b3c8': 
        document.body.style.backgroundColor = '#b3b3c8';
        break;
      case '#86eba1':
        document.body.style.backgroundColor = '#86eba1';
        break;
      case '#96def2': 
        document.body.style.backgroundColor = '#86eba1';
        break;
      case '#dcfadc': 
        document.body.style.backgroundColor = '#dcfadc';
        break;
      default: 
        document.body.style.backgroundColor = '#dcfadc';
    }
  }
 
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
    <div className='App'>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Layout>
          <Route path='/home' component={Home} />
          <Route path='/user/:id' component={UserPage} />
          <Route path='/user/activate/:hash' component={ActivatePage} />
        </Layout>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
