import test from 'ava';

import userService from "../user.service";

let sampleUser;

test.beforeEach(() => {
    sampleUser = {
        name: 'Joe Doe',
        email: 'joedoe@email.com',
        city: 'New York',
        country: 'USA'
    };
});

test.after(() => {
    if (userService.getUser(2)) {
        console.info('Cleanup: User 2 is being removed.')
        userService.removeUser(2);
    }
})



test('must retrieve a user', (t) => {
    const expectedId = 1;

    const user = userService.getUser(1);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...sampleUser });
});

test('must get all users', (t) => {
    // Create a second user
    userService.addUser(sampleUser);

    const users = userService.getAllUsers();

    t.deepEqual(users, [{ id: 1, ...sampleUser }, { id: 2, ...sampleUser }]);
});

test('must update a user', (t) => {
    const userId = 1;

    const updatedDetails = {
        name: 'Alisha',
        email: 'alisha@test.com',
        city: 'sydney',
        country: 'Australia'
    };

    const user = userService.updateUser(userId, updatedDetails);

    t.is(user.id, userId);
    t.deepEqual(user, { id: userId, ...updatedDetails });
});

