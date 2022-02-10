import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "../../infra/typeorm/index.ts";
import routes from "./routes/index.routes";

import ErrorHandler from "./middlewares/ErrorHandler";

const servi = express();

servi.use(express.json());

servi.use(routes);

servi.use(ErrorHandler);

servi.listen(5555, () => {
  console.log("hello friend, i am your server friend");
});
