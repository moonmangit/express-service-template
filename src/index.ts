import express from "express";
import loadEnvConfig from "./assets/utils/loadEnvConfig";
import { HelloController } from "./controllers/HelloController";
import { AuthController } from "./controllers/AuthController";
import { createAuthMiddleware } from "./middlewares/AuthMiddleware";
import { PrismaClient } from "@prisma/client";

const envConfig = loadEnvConfig();
const app = express();
const prisma = new PrismaClient();

const authMiddleware = createAuthMiddleware();

// controller
new HelloController(app).register();
new AuthController(app, prisma).register({
  router: {
    path: "/auth",
  },
  middlewares: [authMiddleware],
});

app.listen(envConfig.service.port, () => {
  console.log(`Server is running on port ${envConfig.service.port}`);
});
