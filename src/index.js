import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

// var config={
//     apiKey:"AIzaSyCRUf1qBak1kF9hxw505XTsdywRGbFfz8E",
//     authDomain: "firstproject-2811.firebaseapp.com/",
//     databaseURL:"https://firstproject-2811.firebaseio.com/registers.json"
// }

// firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
