import sql from 'mssql'

const dbSettings = {
    user: "alan",
    password: "al12457800a.",
    server: "localhost",
    database: "MQRG",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }
}