import React from 'react';
import GlobalStyle from './globalStyles';
import { Navbar } from './components';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Service from './pages/Service/Service';

function App() {
  return (
    <Router>
      <GlobalStyle /> 
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
      </Switch>
    </Router>
  );
}

export default App;

