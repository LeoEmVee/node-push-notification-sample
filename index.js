const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();
// Set static path
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
const vapidEmail = process.env.VAPID_EMAIL;

webpush.setVapidDetails(vapidEmail, publicVapidKey, privateVapidKey);

// Subscribe route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
    // Send 201 - resource created
    res.status(201).json({});
    // Create payload
    const payload = JSON.stringify({ title: 'Push test'});
    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = process.env.API_PORT;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


