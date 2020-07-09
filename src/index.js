import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MapsGenerator from "./components/maps/MapsGenerator";
import WordsGenerator from "./components/words/WordsGenerator";

ReactDOM.render(
  <React.StrictMode>
      {/*<MapsGenerator/>*/}
      <WordsGenerator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
