import { initializeApp } from "firebase/app";


import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpV2l8ZqwRmN9dlerR9BPGg4CR2ZmL6h8",
  authDomain: "react-chat-demo-893ec.firebaseapp.com",
  projectId: "react-chat-demo-893ec",
  storageBucket: "react-chat-demo-893ec.appspot.com",
  messagingSenderId: "356798843241",
  appId: "1:356798843241:web:aba51a71258176263495f8"
};

// Initialize Firebase
const firebaseAppp = initializeApp(firebaseConfig);


export default firebaseAppp