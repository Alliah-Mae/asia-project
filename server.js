const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api.routes');
const path = require('path');

dotenv.config();  // Loads environment variables from .env

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());  // Parses incoming requests with JSON payloads
app.use('/api', apiRoutes);  // Route handling

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
