const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KuDaRSBItOabOhKcnYHV0yZElyRcQdGA3CfBEljClaW9rbDEmF7x9aP3ea6WM4uaofIoePIFxP9FpIJdxger6qU00EexgaBjW')
// API

// App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // OK - Created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

app.get('/qazi', (request, response) => response.status(200).send('WHATS UP QAZI!'))
// - Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
// http://localhost:5001/clone-72bc8/us-central1/api