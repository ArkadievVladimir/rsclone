import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/Home';
// import { Layout } from './pages/Layout';
import { SignIn } from './pages/Signin';
import { UserPage } from './pages/User';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth)
  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.GetMe()
      dispatch(setUserData(data))
      //history.replace('/home')
    } catch (error) {
      console.log(error)
    }
  }


  React.useEffect(() => {
    if(isAuth) {
      history.push('/home')
    }
  },[isAuth])


  React.useEffect(() => {
    checkAuth()
  },[])


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
