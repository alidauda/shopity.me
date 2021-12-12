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
.document("/orders/{ordersId}")
.onCreate((event,context) => {
  
    const ordersId=context.params.ordersId;
 const db=admin.firestore()
 return db.collection('orders').doc(ordersId).get().then((doc) => {
  const user=doc.data();
  
  const token=user?.token;
  const price=user?.price;
const payload = {
    notification: {
      title: `You have a new order of ₦${price}`,
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