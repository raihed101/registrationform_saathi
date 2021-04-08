// import '../index.css';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home';
import Navbar from './Navbar'
import Welcome from './Welcome'
import NotFound from './NotFound'
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";



function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router >



  );
}

export default App;



