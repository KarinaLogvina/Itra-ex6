import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './pages/Users';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {

  return (
    <>
      <div className="App">
        <Router>
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
