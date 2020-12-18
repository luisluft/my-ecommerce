import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA21YOBrkk_pZzEyypITjr6LAx8jWOwm9g",
  authDomain: "my-ecommerce-react.firebaseapp.com",
  projectId: "my-ecommerce-react",
  storageBucket: "my-ecommerce-react.appspot.com",
  messagingSenderId: "424856693913",
  appId: "1:424856693913:web:0424c9ae48e4e0f8e35c08",
  measurementId: "G-38LK4J2NND",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
