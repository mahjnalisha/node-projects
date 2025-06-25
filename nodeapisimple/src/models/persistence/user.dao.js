import users from '../data/users.data';

const get = (userId) => {
    const findUser = (user, index) => {
        if (user.id == userId) {
            return userId;
        }
    };
    isUser = users.find(findUser);
    return isUser;
};

const getAll = () => {
    return users;
}

const remove = (userId) => {
    const deleteUser = (user, index) => {
        if (user.id == userId) {
            //remove the one of the user array that matches 
            users.splice(index, 1);
            return true;
        }
        return false;
    };
    return users.find(deleteUser);

};

const insert = (details) => {
    const newUser = { ...details, id: users.length + 1 }
    users.push(newUser);
    return true;
};

const update = (newDetails) => {
    const newUser = { ...details, id: users.length + 1 }
    users.push(newUser);
    return true;
};


export default {
    get,
    remove,
    insert,
    update
}