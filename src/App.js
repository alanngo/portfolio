import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Projects from './pages/Projects';
import Education from './pages/Education';
import Resources from './pages/Resources'
import Experiences from './pages/Experiences'
import Profile from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, 
  // Row, 
  // Col, 
  // Button 
} from 'react-bootstrap';
// import Text from "./components/Text"
import Navigation from './components/Navigation'
import "./App.css"

const App = () => 
(
    <>
      <Navigation />
      <Router>
        <Container fluid>
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/education" component={Education} />
            <Route path="/resources" component={Resources} />
            <Route path="/experiences" component={Experiences}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/*" component={HomePage} />
          </Switch>
        </Container>
      </Router>

    </>
);

export default App;
