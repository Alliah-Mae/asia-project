const express = require('express');
const db = require('../config/db.config.js'); // Import the database connection
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config();  // Loads environment variables from .env
const router = express.Router();

// Route to get survey attendance data based on 'attended_kk' being 'Yes'
router.get('/survey-attendance', (req, res) => {
    const query = `
        SELECT youth_category, COUNT(*) AS attendance_count
        FROM survey_data
        WHERE attended_kk = 'Yes'
        GROUP BY youth_category
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database query failed.' });
        }
        res.json(results);
    });
});


// You can add more routes for other types of data if needed

module.exports = router;
