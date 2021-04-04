import './index.css';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,

} from "react-router-dom";



function App() {
  return (

    <Router>
      <Navbar />
      <Route exact path="/" >
        <SignUp />
      </Route>
      <Route exact path="/signin" >
        <SignIn />
      </Route>
      <Route exact path="/home" >
        <Home />
      </Route>

    </Router>



  );
}

export default App;



