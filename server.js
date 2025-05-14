import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.routes.js';
import path from 'path';

dotenv.config();  // Loads environment variables from .env

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());  // Parses incoming requests with JSON payloads
app.use('/api', apiRoutes);  // Route handling

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(process.cwd(), 'public')));

// Route for the root URL to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
