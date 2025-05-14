import express from 'express';
import db from '../config/db.config.js'; // Correct default import // Import the database connection
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

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

// Use export default to export the router
export default router;
