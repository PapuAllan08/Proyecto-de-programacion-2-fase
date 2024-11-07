import sql from "mssql";

const dbSettings = {
    user: "papiallan",
    Password: "54321",
    server: "localhost",
    database: "MQRG",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

async function getConnection(){
    const pool = await sql.connect(dbSettings)
    const result = pool.request().query("SELECT 1");
    console.log(result)
};

getConnection();