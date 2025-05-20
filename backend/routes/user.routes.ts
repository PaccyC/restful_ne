import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import userController from '../controllers/user.controller';

const router= Router();

router.post("/create",asyncHandler(userController.signup))

export default router;