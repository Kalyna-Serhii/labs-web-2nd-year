import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import corsOptions from './src/cors/cors.config.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './src/middlewares/error-middleware.js';
import {authRouter, userRouter, serviceRouter, packageRouter} from './src/routes/index.js';

const HOST = 'localhost';
const PORT = 8082;

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api', authRouter, userRouter, serviceRouter, packageRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server listens http://${HOST}:${PORT}/`);
});