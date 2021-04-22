import express from "express";
import controller from "./controller";

var router = express.Router();

/* GET home page. */
router.get("/", controller.getUser);
router.put("/", controller.editUser);

export default router;
