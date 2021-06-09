import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA-AqEwPOwEZk3hJqX6tnxl4cnXx1uvTMw',
  authDomain: 'netflix-clone-2a27e.firebaseapp.com',
  projectId: 'netflix-clone-2a27e',
  storageBucket: 'netflix-clone-2a27e.appspot.com',
  messagingSenderId: '990326866756',
  appId: '1:990326866756:web:14e0459628c63c24a54d11',
  measurementId: 'G-ZWZ0XS79E5',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };
