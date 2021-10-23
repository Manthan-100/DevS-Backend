import express from "express";
import dotenv from 'dotenv';
import ConnectDb from './services/connectDB.js'
import users from './routes/users.js'

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        const app = new express();
        dotenv.config()

        //Initialize Middlewares
        app.use(express.json({ extended: false }))

        // Adding Routes
        app.use('/api/users', users)

        if (ConnectDb()) {
            app.listen(PORT, () => {
                console.log(`> Ready on http://localhost:${PORT}`);
            });
        }

    } catch(error) {
        console.log(error)
    }
}

// Starting Function
startServer();

