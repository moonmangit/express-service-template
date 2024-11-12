import { AuthController } from "./controllers/AuthController";
import { Context } from "./assets/libs/Context";
import { createAuthMiddleware } from "./middlewares/AuthMiddleware";
import { HelloController } from "./controllers/HelloController";
import { PrismaClient } from "@prisma/client";
import express from "express";
import loadEnvConfig from "./assets/utils/loadEnvConfig";

const envConfig = loadEnvConfig();
const app = express();
const prisma = new PrismaClient();
const ctx: Context = {
  app,
  prisma,
  envConfig,
};

const authMiddleware = createAuthMiddleware(ctx);

// controller
new HelloController(ctx).register();
new AuthController(ctx).register({
  router: {
    path: "/auth",
  },
  middlewares: [authMiddleware],
});

app.listen(envConfig.service.port, () => {
  console.log(`Server is running on port ${envConfig.service.port}`);
});
