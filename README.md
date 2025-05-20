Youth Governance 

Overview
This API delivers descriptive analytics for the Youth Governance System of the Municipality of San Jose, Batangas. It provides endpoints to retrieve summarized youth demographic data, survey attendance, program participation, and other key indicators essential for local youth development planning.

The system empowers the Local Youth Development Office (LYDO) to make informed, data-driven decisions by offering aggregated insights derived from youth profiles and survey data.

Dataset Used
The API leverages the Municipality’s youth governance database (ygs.sql), which comprises:

* List of barangays (barangays)
* Youth respondent profiles (respondents)
* Survey data (survey\_data) capturing youth participation, attendance, and program engagement

This dataset is designed to reflect youth demographics, educational attainment, employment status, and participation in core youth governance activities.

Installation and Running

Prerequisites

* Node.js v14 or higher
* MySQL server with imported ygs.sql database
* npm package manager

Setup Steps

1. Clone the repository:
   git clone [https://github.com/Alliah-Mae/asia-project.git](https://github.com/Alliah-Mae/asia-project.git)
   cd asia-project

2. Install dependencies:
   npm install

3. Configure environment variables:
   Create a .env file in the root directory with your database credentials:
   DB\_HOST=localhost
   DB\_USER=root
   DB\_PASSWORD=
   DB\_NAME=ygs

4. Import the database schema and data:
   mysql -u root -p ygs < ygs.sql

5. Start the server:
   npm start

The API will be accessible at [http://localhost:5000/api](http://localhost:5000/api)

API Endpoints

| Method | Endpoint                | Description                           |
| ------ | ----------------------- | ------------------------------------- |
| GET    | /total-youth-barangay   | Total youth count per barangay        |
| GET    | /age-group-distribution | Count of respondents by age group     |
| GET    | /survey-attendance      | Survey attendance counts by category  |
| GET    | /education-level        | Respondents by educational attainment |
| GET    | /employment-status      | Respondents by employment status      |
| GET    | /kk-attendance          | KK Assembly attendance by category    |
| GET    | /program-participation  | Participants count by program         |

Dependencies

* express
* mysql2
* dotenv


