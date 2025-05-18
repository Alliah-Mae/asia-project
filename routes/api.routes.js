import express from 'express';
import db from '../config/db.config.js';

const router = express.Router();

const handleError = (res, error, message = 'Internal Server Error') => {
  console.error(error);
  res.status(500).json({ status: 'error', message });
};


// 1. Total Youth per Barangay - FIXED
router.get('/total-youth-barangay', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        b.barangay_name AS barangay,
        COUNT(r.id) AS total_youth
      FROM barangays b
      LEFT JOIN respondents r ON r.barangay = b.barangay_name
      GROUP BY b.barangay_name
      ORDER BY total_youth DESC
    `);
    res.json({ status: 'success', data: rows });
  } catch (error) {
    handleError(res, error);
  }
});


// 2. Age Group Distribution - GOOD
router.get('/age-group-distribution', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT age_group, COUNT(*) AS total
      FROM respondents
      GROUP BY age_group
    `);
    res.json({ status: 'success', data: rows });
  } catch (error) {
    handleError(res, error);
  }
});

// 3. Survey Attendance Data for Dashboard - GOOD
router.get('/survey-attendance', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        youth_category,
        COUNT(*) as attendance_count
      FROM survey_data
      GROUP BY youth_category
      ORDER BY attendance_count DESC
    `);
    res.json(rows);
  } catch (error) {
    handleError(res, error);
  }
});

// 4. Educational Attainment Breakdown - GOOD
router.get('/education-level', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT education_level, COUNT(*) AS total
      FROM respondents
      GROUP BY education_level
    `);
    res.json({ status: 'success', data: rows });
  } catch (error) {
    handleError(res, error);
  }
});

// 5. Employment Status - GOOD
router.get('/employment-status', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT employment_status, COUNT(*) AS total
      FROM respondents
      GROUP BY employment_status
    `);
    res.json({ status: 'success', data: rows });
  } catch (error) {
    handleError(res, error);
  }
});

// 6. KK Assembly Attendance by Category - GOOD
router.get('/kk-attendance', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT youth_category, COUNT(*) AS attendees
      FROM survey_data
      WHERE attended_kk = 'Yes'
      GROUP BY youth_category
    `);
    res.json({ status: 'success', data: rows });
  } catch (error) {
    handleError(res, error);
  }
});

// 7. Participation in Programs - GOOD
router.get('/program-participation', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        CASE 
          WHEN attended_kk = 'Yes' THEN 'KK Assembly'
          WHEN kk_assembly = 'Yes' THEN 'KK Assembly'
          ELSE 'Did not attend'
        END AS activity_name,
        COUNT(DISTINCT respondent_id) AS participants
      FROM survey_data
      GROUP BY activity_name
    `);
    res.json({ status: 'success', data: rows });
  } catch (error) {
    handleError(res, error);
  }
});

export default router;
