import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListProductController } from "./controllers/ListProductController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ensureIsAdmin } from "./middlewares/ensureIsAdmin";
import { ensureIsAuthenticated } from "./middlewares/ensureIsAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const createProductController = new CreateProductController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();
const listProductController = new ListProductController();


router.post("/users", createUserController.handle);
router.post("/sessions", authenticateUserController.handle);
router.post("/products",ensureIsAuthenticated, ensureIsAdmin, createProductController.handle);
router.get("/users", ensureIsAuthenticated, ensureIsAdmin, listUsersController.handle)
router.get("/products", ensureIsAuthenticated, listProductController.handle)
export { router };