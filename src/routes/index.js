import express from "express";
import IndexRouter from "./internal";
import UserRouter from "./user";
import AuthRouter from "./auth";

const routes = (app) => {
  app.use("/", IndexRouter);
  app.use("/user", UserRouter);
  app.use("/auth", AuthRouter);
};

export default routes;
