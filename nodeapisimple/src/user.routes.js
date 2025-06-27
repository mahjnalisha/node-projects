import express from 'express';
import { expressYupMiddleware } from 'express-yup-middleware'
// import { StatusCodes } from 'http-status-codes';

import userSchemas from './schemas/user.schemas';
import userController from './controllers/user.controller';

const router = express.Router();
const port = 3000;

router.use(express.json());

router.get('/getAll', userController.getAll);

router.post('/add', expressYupMiddleware({
    schemaValidator: userSchemas.addUser
}), userController.addUser);

router.get('/getUsers/:id', expressYupMiddleware({
    schemaValidator: userSchemas.getUser
}), userController.getUser);

router.delete('/remove/:id', expressYupMiddleware({
    schemaValidator: userSchemas.removeUser
}), userController.removeUser);

router.put('/update/:id', expressYupMiddleware({
    schemaValidator: userSchemas.updateUser
}), userController.updateUser);


export default router;