import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListPage from './ Views/ListPage';
import Home from './ Views/Home';
import AddPage from './ Views/AddPage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/list">
            <ListPage />
          </Route>
          <Route exact path="/add-new">
            <AddPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
