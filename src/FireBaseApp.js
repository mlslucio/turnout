import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyCdBQ204TDlIycJXyOp-kzMy9Xqm18AwEI",
    authDomain: "turnout-402b2.firebaseapp.com",
    databaseURL: "https://turnout-402b2.firebaseio.com",
    projectId: "turnout-402b2",
    storageBucket: "turnout-402b2.appspot.com",
    messagingSenderId: "833341182775"
  };

  export const fireBaseApp = firebase.initializeApp(config);

  export const eventsRef = fireBaseApp.database().ref().child('events')