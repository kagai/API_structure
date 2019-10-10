import { Router } from 'express';

import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

const router = Router();

// router.get('/login', AuthController.login);
router.get('/', UserController.getAllUsers);
router.post('/',UserController.createUser);
router.get('/:id',UserController.getOneUser);
router.put('/:id',UserController.updateUser);
router.post('/delete',UserController.deleteUser);

export default router;