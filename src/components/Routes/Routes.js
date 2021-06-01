import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Navbar } from 'components/Navbar';
import { Home } from 'components/pages/Home';
import { Docs } from 'components/pages/Docs';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/docs" children={<Docs />} />
        <Route path="/docs/:docpath" children={<Docs />} />
      </Switch>
    </Router>
  );
};

export default Routes;
