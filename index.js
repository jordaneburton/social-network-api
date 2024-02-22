const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routing to routes directory
app.use(routes);

// turning on server and connecting to database via 'db'
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
    })
});