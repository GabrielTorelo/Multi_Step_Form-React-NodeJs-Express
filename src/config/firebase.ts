import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8O5GfBmhkMMCKiQSq44I12MnNy5DJu-o",
  authDomain: "testedevfullstack.firebaseapp.com",
  projectId: "testedevfullstack",
  storageBucket: "testedevfullstack.appspot.com",
  messagingSenderId: "433976316293",
  appId: "1:433976316293:web:9cc07c55c9d657fbf9f4ec"
};

firebase.initializeApp(firebaseConfig);

export default firebase