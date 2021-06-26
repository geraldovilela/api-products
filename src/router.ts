import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ensureIsAdmin } from "./middlewares/ensureIsAdmin";
import { ensureIsAuthenticated } from "./middlewares/ensureIsAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const listUsersController = new ListUsersController();


router.post("/users", createUserController.handle);
router.post("/sessions", authenticateUserController.handle);

router.get("/users",ensureIsAuthenticated,ensureIsAdmin, listUsersController.handle)

export { router };