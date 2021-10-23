import express from "express";
import dotenv from 'dotenv';

const PORT = process.env.PORT || 4000;

const startServer = () => {
    const app = new express();
    dotenv.config()

    app.listen(PORT, () => {
        console.log(`> Ready on http://localhost:${PORT}`);
    });
}

// Starting Function
startServer();

