import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListPage from './ Views/ListPage';
import Home from './ Views/Home';
import AddPage from './ Views/AddPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/list">
            <ListPage />
          </Route>
          <Route exact path="/add-todo">
            <AddPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
