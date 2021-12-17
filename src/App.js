import Home from './component/Home';
import Login from './component/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuestRoute from './Routes/GuestRoute';
import UserRoute from './Routes/UserRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Route component={RouteComponent}></Route>
    </Router>
  );
}
const RouteComponent = () => {
  return (
    <Switch>
      <GuestRoute path='/login' exact component={Login} />
      <UserRoute exact path='/home' component={Home} />
      <UserRoute path='/' component={Home} />
    </Switch>
  );
};

export default App;
