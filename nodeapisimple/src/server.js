import express from 'express';
import { StatusCodes } from 'http-status-codes';

import appRoutes from './routes';

const app = express();
const port = 3000;
const STATUS = {
    SUCCESS: "OK",
    FAILURE: "FAILED"
};

app.use(express.json());

app.use('/v1', appRoutes);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});