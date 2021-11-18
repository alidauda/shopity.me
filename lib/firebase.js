import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
let firebaseConfig = {
  apiKey: "AIzaSyB3sxZmG2yk8i7N9Foe7zAa57wij6DcZ5U",
  authDomain: "project2-cdde2.firebaseapp.com",
  databaseURL: "https://project2-cdde2.firebaseio.com",
  projectId: "project2-cdde2",
  storageBucket: "project2-cdde2.appspot.com",
  messagingSenderId: "550817027558",
  appId: "1:550817027558:web:14f81a2c8da84773aaf227",
  measurementId: "G-Z6X9NP6TTW"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auths = firebase.auth();
export const fi=firebase.auth;
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
  // Firestore exports
export const firestore = firebase.firestore();
export const storage = firebase.storage();
//export const fromMillis = firebase.firestore.Timestamp.fromMillis;
 /**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
  export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }


  /**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

  