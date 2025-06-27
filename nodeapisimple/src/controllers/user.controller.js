import { StatusCodes } from 'http-status-codes';
import userService from '../services/user.service';
import pino from 'pino';

const logger = pino();
const STATUS = {
    success: "OK",
    failure: "FAILED"
};

/**
 * Retrieve all users
 * @param {*} req 
 * @param {*} res 
 * @returns {*}
 */
const getAll = (req, res) => {
    const users = userService.getAllUsers();
    logger.info(`Retrieving all users `);

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No users found.',
    });
};

/**
 * Add a user
 * @param {*} req 
 * @param {*} res 
 * @returns {*}
 */
const addUser = (req, res) => {
    const { body: user } = req;
    logger.info(`adding new user `);
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
            data: addedUser
        });
    }

};
/**
 * Retrieve a user
 * @param req 
 * @param res 
 * @returns {*}
 */

const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
    logger.info(`Retriving user id ${id} `);

    if (user) {
        return res.status(StatusCodes.OK).send(user);
    } else {
        return res.send({
            status: STATUS.failure,
            message: `User ${id} found`,
        });
    }


};

/**
 *  Delete a user
 * @param {} req 
 * @param {*} res 
 * @returns 
 */
const removeUser = (req, res) => {
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
};

/**
 * Update a user 
 * @param req 
 * @param  res 
 * @returns {*}
 */
const updateUser = (req, res) => {
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

}

export default {
    getAll,
    addUser,
    getUser,
    removeUser,
    updateUser

}