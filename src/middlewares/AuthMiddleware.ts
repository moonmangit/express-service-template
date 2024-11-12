import { RequestHandler } from "express";
import { Context } from "../assets/libs/Context";

export function createAuthMiddleware(ctx: Context): RequestHandler {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({
        message: "Unauthorized",
      });
      return;
    }
    next();
  };
}
