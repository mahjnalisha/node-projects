import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service';


const router = express.Router();
const port = 3000;
const STATUS = {
    success: "OK",
    failure: "FAILED"
};
router.use(express.json());

router.get('/getAll', (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No users found.',
    });
});


router.post('/add', (req, res) => {
    const { body: user } = req;
    console.log(user);
    const addedUser = userService.addUser(user);
    if (user.name === undefined || !user.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.FAILURE,
            message: 'Name is required'
        });

    }
    else {
        res.status(StatusCodes.CREATED).send({
            status: STATUS.OK,
            data: user
        });
    }

});
router.get('/getUsers/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send(user);
    } else {
        return res.send({
            status: STATUS.failure,
            message: `User ${id} found`,
        });
    }


});

router.get('/remove/:id', (req, res) => {
    const { params } = req;

    const id = parseInt(params.id);
    const user = userService.getUser(id);
    if (user) {
        userService.removeUser(id);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} has been deleted.`,
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} hasn't been found.`,
        });
    }
});




router.put('/update/:id', (req, res) => {
    const { body: user } = req;
    const id = parseInt(req.params.id, 10);
    const updateUser = userService.updateUser(id, user);
    if (updateUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: updateUser
        });

    }
    else {
        res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.OK,
            message: `User "${id}" is not found`
        });
    }

});


export default router;