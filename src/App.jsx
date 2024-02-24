import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'
import { Link } from 'react-router-dom';

import Home from './Home.jsx';
import Resume from './Resume.jsx';
import Works from './Works.jsx';
import Contact from './Contact.jsx';



function App() {
    return (
  
     <Router>
      <div>
         {/* Navigation */}
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

          {/* Routes */}
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          </Switch>
      </div>
    </Router>

  )
}

export default App
