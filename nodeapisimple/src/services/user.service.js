import userDao from '../models/persistence/user.dao';


const getUser = (userId) => {
    return userDao.getUser(userId);
};
const getAllUsers = () => userDao.getAll();

const removeUser = (userId) => {
    return userDao.remove(userId);
};

const addUser = (details) => {
    return userDao.insert(details);
};

const updateUser = (userId, details) => {
    // console.log(details);
    // console.log(userId);
    return userDao.updateUser(userId, details);
};


export default {
    getUser,
    getAllUsers,
    removeUser,
    addUser,
    updateUser
}