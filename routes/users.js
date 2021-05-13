import express from 'express'

import { getUsers, createUser, findUser, updateUser, deleteUser } from "../controllers/users.js"

const router = express.Router();

router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', findUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router;