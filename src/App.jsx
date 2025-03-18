import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

<<<<<<< HEAD
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
}

export default App;
=======
    ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> parent of f603327 (Refactor code structure and dependencies)
