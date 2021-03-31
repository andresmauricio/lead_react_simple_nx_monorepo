import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Badges from './pages/Badges';
import BadgeForm from './pages/BadgeForm';
import Home from './pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/add-badge" component={BadgeForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
