import express from "express";
import loadEnvConfig from "./assets/utils/loadEnvConfig";
import { HelloController } from "./controllers/HelloController";
import { AuthController } from "./controllers/AuthController";
import { createAuthMiddleware } from "./middlewares/AuthMiddleware";

const envConfig = loadEnvConfig();
const app = express();

const authMiddleware = createAuthMiddleware();

// controller
new HelloController(app).register();
new AuthController(app).register({
  router: {
    path: "/auth",
  },
  middlewares: [authMiddleware],
});

app.listen(envConfig.service.port, () => {
  console.log("Server is running on port 3000");
});
