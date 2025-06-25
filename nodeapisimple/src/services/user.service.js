import UserDao from '../models/persistence/user.dao';

const getUser = (userId) => {
    UserDao.get(userId);
};

const removeUser = (userId) => {
    UserDao.remove(userId);
};

const addUser = (details) => {
    UserDao.insert(details);
};

const updateUser = (userId) => {
    UserDao.remove(userId);
};