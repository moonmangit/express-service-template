import { PrismaClient } from "@prisma/client";
import { Application, RequestHandler } from "express";
import { EnvConfig } from "../utils/loadEnvConfig";

export interface Context {
  app: Application;
  prisma: PrismaClient;
  envConfig: EnvConfig;
}
