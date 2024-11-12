import { RequestHandler } from "express";

export function createAuthMiddleware(): RequestHandler {
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
