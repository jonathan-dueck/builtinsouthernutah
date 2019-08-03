import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADmDX6j6wGcJdRtl6SUcn4njBwQjgK7Z4",
    authDomain: "built-in-southern-utah.firebaseapp.com",
    databaseURL: "https://built-in-southern-utah.firebaseio.com",
    projectId: "built-in-southern-utah",
    storageBucket: "",
    messagingSenderId: "280668379984",
    appId: "1:280668379984:web:8a67bc0acd2d291f"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;