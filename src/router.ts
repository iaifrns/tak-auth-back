import e from "express";
import { createUsers } from "./routers/user";

const router = e.Router();

//users routers
router.post("/create-users", createUsers);

export default router;