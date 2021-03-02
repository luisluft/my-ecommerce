import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
var db = firebase.firestore();
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionReference = firestore.collection(collectionKey);
  console.log(objectsToAdd);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocumentReference = collectionReference.doc();
    batch.set(newDocumentReference, object);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
