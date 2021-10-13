import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Projects from './pages/Projects';
import Education from './pages/Education';
import Resources from './pages/Resources'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation'
const App = () => 
(
    <div className="App">
      <Navigation />
      <Router>
        <Container fluid>
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/education" component={Education} />
            <Route path="/resources" component={Resources} />
            <Route path="/*" component={HomePage} />
          </Switch>
        </Container>
      </Router>
    </div>
);

export default App;
