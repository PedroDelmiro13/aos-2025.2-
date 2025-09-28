import { tarefas } from "../models/tarefa.js";
import { v4 as uuidv4 } from "uuid";

export const getTasks = (req, res) => {
    try {
        if (tarefas.length === 0) {
            throw new Error("Tarefa nao encontrada");
        } res.json(tarefas)
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
};

export const getTaskById = (req, res) => {
    try {
        const { taskId } = req.params;
        const task = tarefas.find(t => t.id === taskId);
        if (!task) {
            throw new Error("Tarefa não encontrada");
        }
        res.json(task);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }

}

export const createTask = (req, res) => {
    try {
        if (!req.body.description) {
            throw new Error("Precisa de descrição");
        }
        const newTask = {
            id: uuidv4(),
            description: req.body.description,
            completed: false,
        };

        tarefas.push(newTask);
        res.status(201).json({
            message: "Tarefa criada",
            data: newTask,
        });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
};

export const updatedTask = (req, res) => {
    try {

        const { taskId } = req.params;
        const task = tarefas.find(t => t.id === taskId);

        if (!task) {
            throw new Error("Tarefa não encontrada");
        }
        if (req.body.description !== undefined) {
            task.description = req.body.description;
        }
        if (req.body.completed !== undefined) {
            task.completed = req.body.completed;
        }
        res.status(200).json({
            message: "Tarefa atualizada",
            data: task,
        });
    } catch (e) {
        res.status(404).json({
            error: e.message
        })
    }
};

export const deleteTask = (req, res) => {
    try {
        const { taskId } = req.params;
        const index = tarefas.findIndex(t => t.id === taskId);
        if (index === -1) {
            throw new Error("Tarefa não encontrada");
        }
        tarefas.splice(index, 1);
        res.json({
            message: "Tarefa deletada com sucesso"
        });
    } catch (e) {
        res.status(404).json({
            error: e.message,
        });
    }
}