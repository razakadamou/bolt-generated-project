import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Commande from './pages/Commande';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Partenaires from './pages/Partenaires';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/commande" component={Commande} />
      <Route path="/consultation" component={Consultation} />
      <Route path="/contact" component={Contact} />
      <Route path="/partenaires" component={Partenaires} />
    </Switch>
  </Router>
);

export default App;
