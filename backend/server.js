import express, { json } from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//middleware that allows use to accept JSON data in the req body.
app.use(
    cors({
        origin: "http://localhost:5173"
    })
);
app.use(express.json());
app.use(rateLimiter)



app.use("/api/products", productRoutes);

app.listen(3001, () => {
    connectDB();
    console.log('Server started at http://localhost:3001 ');
});
