const customers = require ('./customers.json')
const products = require ('./products.json')
const{ initializeApp, applicationDefault, cert } =require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const credentials = require('./credentials.json')

initializeApp({
    credential: cert(credentials)
});
const db = getFirestore();

const express = require('express');
const { response } = require('express');
const app = express()
app.use(express.json())


app.listen(3000, () => {
    console.log(`The API is listenin on port`)
})

// app.get('/', (request, response)=> {
//     response.send('Hello World')
// })

// const prodRef = db.collection("products")
// prodRef.add(products[0])
// .then(doc => {
//     console.log ('addded products', doc.id)
// })
// .catch(console.error)


// const custRef = db.collection ('customers')
// custRef.add (customers [2])
// .then(doc => {
//     console.log ('added customers', doc.id)

// })
// .catch(console.error)