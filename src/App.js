import './App.css';
import React, {Suspense,lazy} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, NotFound, Page } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/pages/:pid" component={Page} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
