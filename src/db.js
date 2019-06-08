const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAWCXaABhJsOvfr9a9vAnI_MTKN8fY2Muc',
  authDomain: 'nisky-arc.firebaseapp.com',
  databaseURL: 'https://nisky-arc.firebaseio.com',
  projectId: 'nisky-arc',
  storageBucket: 'nisky-arc.appspot.com',
  messagingSenderId: '135190090006',
  appId: '1:135190090006:web:3035237ff5ca6ed0'
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export async function getTutors() {
  console.log('DB: tutors');
  const querySnapshot = await db.collection('tutors').get();
  console.log(querySnapshot);
  return querySnapshot.docs;
}
