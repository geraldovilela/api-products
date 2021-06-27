import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureIsAdmin } from "./middlewares/ensureIsAdmin";
import { ensureIsAuthenticated } from "./middlewares/ensureIsAuthenticated";
import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductController } from "./controllers/ListProductController";
import { UserAddFavoriteProductController } from "./controllers/UserAddFavoriteProductController";

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const userAddFavoriteProductController = new UserAddFavoriteProductController()

router.post("/users", createUserController.handle);
router.post("/sessions", authenticateUserController.handle);
router.get("/users", ensureIsAuthenticated, ensureIsAdmin, listUsersController.handle);
router.post("/products", ensureIsAuthenticated, ensureIsAdmin, createProductController.handle);
router.get("/products", ensureIsAuthenticated, listProductController.handle);
router.post("/user/products", ensureIsAuthenticated, userAddFavoriteProductController.handle);


export { router };