import { v4 as uuidv4} from 'uuid';

let users = [];


export const getUsers =  (req, res) => {
    res.send(users);
};

export const getUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id)

    res.send(foundUser);
};

export const createUser = (req, res) => {
    const user = req.body;

    // const userWithId = {...user, id: uuidv4()};

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.first_name} added to the array!`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;

    const user = users.find((user) => user.id == id);   

    if(first_name) user.first_name = first_name;

    if(last_name) user.last_name = last_name;
    
    if(age) user.age = age;

    res.send(`User with id ${id} has been updated!`);

};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} has been deleted!`);
};