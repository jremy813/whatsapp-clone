import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9Uxi4P8YLqu7oyAYNoDydMz3oyR7A-ds",
  authDomain: "whats-app-clone-c5a5b.firebaseapp.com",
  databaseURL: "https://whats-app-clone-c5a5b.firebaseio.com",
  projectId: "whats-app-clone-c5a5b",
  storageBucket: "whats-app-clone-c5a5b.appspot.com",
  messagingSenderId: "544627770468",
  appId: "1:544627770468:web:4a4da58a1e369aae7fcb71",
  measurementId: "G-6CYF1ME0DR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
