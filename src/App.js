import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import getStore from './redux/store/index';

import Home from './views/home';
import Profile from './views/profile';

const { store } = getStore();
function App() {
  return(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  </Provider>
  )
}

export default App;
