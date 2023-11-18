import express from "express";
import authMiddleware from "../middlewares/auth-middleware.js";
import userController from "../controllers/user-controller.js";

const router = express.Router();

router.get("/users", authMiddleware.hasRole(), userController.getUsers);
router.get("/user/:id", authMiddleware.hasRole(), userController.getUserById);
router.post("/user", authMiddleware.hasRole(), userController.createUser);
router.patch("/user/:id", authMiddleware.hasRole(), userController.updateUser);
router.delete("/user/:id", authMiddleware.hasRole(), userController.deleteUser);

export default router;