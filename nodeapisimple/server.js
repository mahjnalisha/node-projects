import express from 'express';

const app = express();
const port = 5000;

app.get('/hello', (req, res) => {
    res.send('Hello ')
});

app.listen(port, () => {

    console.log(`Hey this is http://localhost:${port}`)
})