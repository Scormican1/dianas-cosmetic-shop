const express = require('express');
const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const credentials = require('./credentials.json');

const app = express();
const PORT = process.env.PORT || 3000;

function connectToFirestore() {
  if(!getApps().length) {
    initializeApp({
      credential: cert(credentials)
    });
  }





  
  return getFirestore();
}


app.get('/customers', async (req, res) => {
  const db = connectToFirestore();
  db.collection('customers').get()
    .then(snapshot => {
      const customers = snapshot.docs.map(doc => {
        customer.id = doc.id;
        return customer
      });
      res.status(200).send(customers);
    })
    .catch(console.error);
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));










};