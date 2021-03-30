import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyCpEfaSPkvPMsDQAQpoyPY-JzcaMPEoR0U",
    authDomain: "auth-react-5d44d.firebaseapp.com",
    projectId: "auth-react-5d44d",
    storageBucket: "auth-react-5d44d.appspot.com",
    messagingSenderId: "916683403852",
    appId: "1:916683403852:web:bdf0b80dda342689a7bae9"
};
let fire = firebase.initializeApp(firebaseConfig);


export default fire

