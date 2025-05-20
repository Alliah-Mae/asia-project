Youth Governance Analytics API

Overview
This API supports descriptive analytics for the Youth Governance System of the Municipality of San Jose, Batangas. It provides endpoints to retrieve summarized youth demographic data, survey attendance, program participation, and other indicators critical for local youth development planning.

The system empowers the Local Youth Development Office (LYDO) to make informed, data-driven decisions by offering aggregated insights from youth profiles and survey data.

Dataset Used
The API utilizes the Municipality’s youth governance database, which includes:

- Barangays list (barangays)
- Youth respondents profiles (respondents)
- Survey data (survey_data) capturing youth participation, attendance, and program engagement

This dataset is structured to reflect the youth demographics, education, employment status, and participation in key youth governance activities.

Installation and Running
Prerequisites

- Node.js v14+
- MySQL server with imported database schema and data
- npm package manager

Setup Steps

1. Clone the repository:
   git clone https://github.com/Alliah-Mae/asia-project.git
   cd asia-project

2. Install dependencies:
   npm install

3. Configure environment variables:  
   Create .env file in root directory with your database credentials:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=your_database_name

4. Import database schema and data (example command):
   mysql -u root -p your_database_name < your_database_dump.sql

5. Start the server:
   npm start
   The API will be accessible at http://localhost:5000/api

API Endpoints
| Method | Endpoint                 | Description                            |
|--------|--------------------------|--------------------------------------|
| GET    | /total-youth-barangay    | Total youth count per barangay        |
| GET    | /age-group-distribution  | Count of respondents by age group     |
| GET    | /survey-attendance       | Survey attendance counts by category  |
| GET    | /education-level         | Respondents by educational attainment |
| GET    | /employment-status       | Respondents by employment status      |
| GET    | /kk-attendance           | KK Assembly attendance by category    |
| GET    | /program-participation   | Participants count by program          |

Dependencies
- express
- mysql2
- dotenv
