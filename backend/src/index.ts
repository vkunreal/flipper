import { Express } from "express";

import usersRouter from "./routers/users/usersRouter";

export const addRouters = (app: Express) => {
  app.use("/api", usersRouter);
};
