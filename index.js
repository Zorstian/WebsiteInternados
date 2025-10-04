const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/api/internados', async (req, res) => {
  const result = await pool.query('SELECT * FROM internados');
  res.json(result.rows);
});

app.listen(3000, () => console.log('API corriendo en puerto 3000'));