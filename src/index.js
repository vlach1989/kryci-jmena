import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';
import MapsGenerator from "./components/maps/MapsGenerator";
import WordsGenerator from "./components/words/WordsGenerator";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div style={{paddingLeft: 20}}>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/words">
                      <WordsGenerator />
                  </Route>
                  <Route path="/maps">
                      <MapsGenerator />
                  </Route>
                  <Route path="/">
                      <h1>Krycí jména</h1>
                      <nav>
                          <ul>
                              <li>
                                  <Link to="/maps">Generátor map</Link>
                              </li>
                              <li>
                                  <Link to="/words">Vytváření slov</Link>
                              </li>
                          </ul>
                      </nav>
                  </Route>
              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
