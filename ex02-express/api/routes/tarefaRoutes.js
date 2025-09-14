import { Router } from "express";
import {
    getTaskById,
    getTasks,
    createTask,
    deleteTask,
    updatedTask,
} from "../controllers/tarefasController.js";

const router = Router();

router.get("/", getTasks);
router.get("/:taskId", getTaskById);
router.post("/", createTask);
router.put("/:taskId", updatedTask);
router.delete("/:taskId", deleteTask);

export default router;
