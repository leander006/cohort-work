"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("dotenv").config();
function insertUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.create({
                data: {
                    username,
                    password
                },
                select: {
                    id: true,
                    username: true
                }
            });
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function updateUser(username, newUsername, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.update({
                where: {
                    username
                },
                data: {
                    username: newUsername,
                    password
                },
                select: {
                    id: true,
                    username: true
                }
            });
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// insertUser("knock","12345")
// updateUser("leander006","knock","123")
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.findMany({
                select: {
                    id: true,
                    username: true,
                    profile: true,
                },
                where: {
                    username,
                }
            });
            if (user.length > 0) {
                console.log(user[0]);
            }
            else {
                console.log("No user found");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
// getUser("knock")
function remove(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.findFirst({
                where: {
                    username
                }
            });
            if (user == null) {
                return console.log("No user exists");
            }
            yield prisma.user.delete({ where: {
                    username
                } });
            console.log("deleted successfully");
        }
        catch (error) {
            console.log(error);
        }
    });
}
// remove("knock");
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield prisma.todo.create({
                data: {
                    title,
                    description,
                    userId
                }
            });
            return todo;
        }
        catch (error) {
            console.log(error);
        }
    });
}
// createTodo(2, "go to church", "go to church and do pray");
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield prisma.todo.findMany({
                where: {
                    userId: userId,
                },
            });
            return todos;
        }
        catch (error) {
            console.log(error);
        }
    });
}
// getTodos(2);
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield prisma.todo.findMany({
                where: {
                    userId: userId,
                },
                select: {
                    User: true,
                    title: true,
                    description: true
                }
            });
            console.log(todos);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// getTodosAndUserDetails(2)
app.get("/", (req, res) => {
    res.json({
        message: "Dockerize cohort prisma code in express"
    });
});
app.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getTodos(Number(req.params.id));
        res.status(200).json({ data: data });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield createTodo(req.body.userId, req.body.title, req.body.description);
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}));
app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});
