import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.newOrders=functions.firestore
.document("/users/{usersId}/orders/{ordersId}")
.onCreate((event,context) => {
    const usersId = context.params.usersId;
 const db=admin.firestore()
 return db.collection('users').doc(usersId).get().then((doc) => {
const user=doc.data();
const token=user?.token;
const payload = {
    notification: {
      title: `You have a new order"`,
      body: "click to open",
      badge: '1',
      sound: 'default'
    }
  }
  admin
  .messaging()
  .sendToDevice(token, payload).then(response => {
    return console.log('Successfully sent message:', response)
  }).catch(error => {
    return console.log('Error sending message:', error)
  })
 });
  
  
});