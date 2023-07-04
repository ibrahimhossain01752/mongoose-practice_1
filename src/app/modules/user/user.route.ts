import express from 'express';
import { createUser, getAdminUsers, getUserById, getUsers } from './user.controller';
// import { getUserById } from './user.services';

const router = express.Router();

router.get('/', getUsers);
router.get("/admin",getAdminUsers);
router.get('/:id', getUserById);
router.post('/createUser',createUser);

export default router;