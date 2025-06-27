import express from 'express';
import mainRoutes from './routes';
import userRoutes from './user.routes';


const app = express();
const port = 3000;
const STATUS = {
    SUCCESS: "OK",
    FAILURE: "FAILED"
};

app.use(express.json());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});