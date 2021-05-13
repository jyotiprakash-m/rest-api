import { v4 as uuid } from "uuid"

let users = [];
export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuid() });
    console.log(`User created`);
    res.status(201).send("user Inserted successfully");
}

export const findUser = (req, res) => {
    res.status(200).send(req.params.id);
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)

    user.name = req.body.name;
    user.age = req.body.age;
    res.send(user)
}

export const deleteUser = (req, res) => {

    users = users.filter((user) => user.id !== req.params.id)
    res.send(users)

}