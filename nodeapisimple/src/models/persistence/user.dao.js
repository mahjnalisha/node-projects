import users from '../data/users.data';
// const getUser = (userId) => users.find((user) => user.id === userId);

const getUser = (userId) => {

    const user = users.find(u => u.id === userId);
    return user;
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

const updateUser = (userId, newDetails) => {
    // console.log(newDetails);
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    };

    users.splice(userIndex, 1, updatedUser);
    console.log(updatedUser);
    return updatedUser;

    // let exisitingUser = false;
    // let userIndex;
    // console.log('userIndex' + newDetails);
    // users.map((user, index) => {
    //     if (user.id === newDetails.id) {
    //         exisitingUser = user;
    //         userIndex = index;
    //     }
    // })
    // if (!exisitingUser) {
    //     return false;
    // }
    // const updatedUserdata = {
    //     ...exisitingUser,
    //     newDetails
    // }
    // user.splice(userIndex, 1, updatedUserdata);
};


export default {
    getUser,
    getAll,
    remove,
    insert,
    updateUser
}