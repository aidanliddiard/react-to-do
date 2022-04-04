import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListPage from './ Views/ListPage';
import Home from './ Views/Home';
import AddPage from './ Views/AddPage';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/list" currentUser={currentUser}>
            {currentUser ? <ListPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/add-new">
            {currentUser ? <AddPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
