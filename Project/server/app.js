import express from 'express';
import cors from 'cors';
import corsOptions from './src/cors/cors.config.js';
import {sequelize} from './src/database/database.config.js';
import errorMiddleware from './src/middlewares/error-middleware.js';
import {serviceRouter, packageRouter} from './src/routes/index.js';

const HOST = 'localhost';
const PORT = 8082;

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', serviceRouter, packageRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server listens http://${HOST}:${PORT}/`);
});
