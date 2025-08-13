require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');


const PORT = process.env.PORT || 8000;

async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}. Access it at http://localhost:${PORT}`);   
        });
    } 
    catch (error) 
    {
        console.error(error);
        process.exit(1);
    }
}

startServer();

