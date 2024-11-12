import { RequestHandler, Router } from "express";
import { Context } from "./Context";

export interface RegisterOptions {
  router?: {
    path?: string;
  };
  middlewares?: RequestHandler[];
}

export class Controller {
  protected ctx;
  constructor(ctx: Context) {
    this.ctx = ctx;
  }

  public register(options?: RegisterOptions) {
    throw new Error("register method not implemented");
  }

  // register strategy
  protected registerWithRouter(
    cb: (router: Router) => void,
    options?: RegisterOptions
  ) {
    const router = Router();
    if (options?.middlewares) {
      router.use(options.middlewares);
    }
    cb(router);
    this.ctx.app.use(options?.router?.path || "/", router);
  }
}
