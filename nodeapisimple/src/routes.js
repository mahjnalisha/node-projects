import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
const port = 3000;
const STATUS = {
    success: "OK",
    failure: "FAILED"
};
router.use(express.json());

router.get('/hello', (req, res) => {

    res.status(StatusCodes.OK);
    res.send('Hello');
});


router.post('/add', (req, res) => {
    const { body } = req;
    if (body.name === undefined || !body.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.FAILURE,
            message: 'Name is required'
        });

    }
    else {
        res.status(StatusCodes.CREATED).send({
            status: STATUS.OK,
            data: body
        });
    }

});


export default router;