import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import authController from '../controllers/auth.controller';

const router= Router();

router.post("/login",asyncHandler(authController.login))

export default router;