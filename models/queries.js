const connection = require('../config/db.config');

// Function to fetch survey data
const getSurveyData = (callback) => {
    const query = 'SELECT * FROM survey_data';
    connection.query(query, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = {
    getSurveyData,
};
