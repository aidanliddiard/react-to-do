import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import List from './ Views/List';
import Home from './ Views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
