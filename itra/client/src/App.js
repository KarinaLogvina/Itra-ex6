import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Users from './pages/Users';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Link to="/">Log Out </Link>
          <Link to="/users">Line </Link>
          <Link to="/login">login </Link>
          <Link to="/registration">Registration </Link>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/users" exact component={Users} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
