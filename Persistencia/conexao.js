import mysql from 'mysql2/promise';

export default async function conectar()
{
    const pool = mysql.createPool({
        host: 'sql10.freesqldatabase.com',
        port: 3306,
        user: 'sql10714155',
        password: '4RR3x4MaT1',
        database: 'sql10714155',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    });
    return await pool.getConnection();
}
