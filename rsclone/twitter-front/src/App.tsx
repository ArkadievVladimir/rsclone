import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
// import { Layout } from './pages/Layout';
import { SignIn } from './pages/Signin';
import { UserPage } from './pages/User';

function App() {
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
