export const envConfig = {
    connectionString: process.env.DB_CONNECTION_STRING as string,
    serverPort: parseInt(process.env.SERVER_PORT as string),
};
