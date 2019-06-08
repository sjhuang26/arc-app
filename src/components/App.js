import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Body from './Body';
import { StoreProvider } from '../stores/root';

// const firebase = require('firebase');
// Required for side-effects
// require('firebase/firestore');

/*const firebaseConfig = {
  apiKey: "AIzaSyAWCXaABhJsOvfr9a9vAnI_MTKN8fY2Muc",
  authDomain: "nisky-arc.firebaseapp.com",
  databaseURL: "https://nisky-arc.firebaseio.com",
  projectId: "nisky-arc",
  storageBucket: "nisky-arc.appspot.com",
  messagingSenderId: "135190090006",
  appId: "1:135190090006:web:3035237ff5ca6ed0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log('get');
db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});*/

function App() {
  return (
    <StoreProvider>
      <Body />
    </StoreProvider>
  );
}

export default App;
