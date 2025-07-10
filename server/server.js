import express  from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";



// 3:42:42

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ['https://hospitalo-mern-frontend.onrender.com']

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins ,credentials: true}));

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

// Start server
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});