import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllUsers);
// router.post('/',);
// router.get('/:id',);
// router.put('/:id', );
// router.delete('/:id',);

export default router;