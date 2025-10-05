import express from 'express'
import { getPublishCreations, getUserCreation, toggleLikeCreation } from '../controllers/userController.js';
import { auth } from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreation)

userRouter.get('/get-published-creations', auth, getPublishCreations)

userRouter.post('/toggle-like-creation', auth, toggleLikeCreation)

export default userRouter;