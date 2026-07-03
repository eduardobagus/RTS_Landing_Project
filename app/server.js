const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
};

const DB_NAME = 'company_cms';

let db;

async function initDatabase() {
    const conn = await mysql.createConnection(DB_CONFIG);

    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
    console.log(`Database '${DB_NAME}' siap.`);
    await conn.end();

    db = mysql.createPool({ ...DB_CONFIG, database: DB_NAME });

    await db.query(`
        CREATE TABLE IF NOT EXISTS news (
            id            INT AUTO_INCREMENT PRIMARY KEY,
            title         VARCHAR(255)  NOT NULL,
            excerpt       TEXT,
            thumbnail     VARCHAR(500),
            is_published  TINYINT(1)    NOT NULL DEFAULT 1,
            created_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log("Tabel 'news' siap.");
    console.log('Berhasil terhubung ke database MySQL.');
}

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'PT RTS CMS Backend berjalan',
        endpoints: {
            latestNews: 'GET /api/news/latest',
        },
    });
});

app.get('/api/news/latest', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT id, title, excerpt, thumbnail, created_at
            FROM news
            WHERE is_published = 1
            ORDER BY created_at DESC
            LIMIT 3
        `);
        res.json(rows);
    } catch (err) {
        console.error('Query error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/jobs', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT *
            FROM job_openings
            ORDER BY posted_on DESC
        `);
        res.json(rows);
    } catch (err) {
        console.error('Query error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

initDatabase()
    .then(() => {
        app.listen(5000, () => {
            console.log('Server Backend CMS berjalan di http://localhost:5000');
        });
    })
    .catch((err) => {
        console.error('Gagal inisialisasi database:', err.message);
        process.exit(1);
    });