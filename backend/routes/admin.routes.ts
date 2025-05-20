import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import adminController from '../controllers/admin.controller';
import { checkAdmin, checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.use(checkAuth);

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management endpoints
 */

/**
 * @swagger
 * /api/v1/admin/create:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post("/create", asyncHandler(adminController.signup));

/**
 * @swagger
 * /api/v1/admin/users/all:
 *   get:
 *     summary: Get all users
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: Unauthorized
 */
router.get("/users/all", asyncHandler(adminController.getUsers));

export default router;
