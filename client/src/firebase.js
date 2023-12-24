import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoaw6rdKqIDGpmT-Z2f1lrvzK5tZgzu94",
  authDomain: "react-chat-2e623.firebaseapp.com",
  projectId: "react-chat-2e623",
  storageBucket: "react-chat-2e623.appspot.com",
  messagingSenderId: "8607595754",
  appId: "1:8607595754:web:c4da688215443627a42b93"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);


export default firebaseApp 