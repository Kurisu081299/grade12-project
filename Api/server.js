const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const dbConn = require('./config/dbconfig');
const app = express();
const port = process.env.PORT || 8000;

// Routes
const userRoute = require('./route/userRoute');

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api/v1/user', userRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
