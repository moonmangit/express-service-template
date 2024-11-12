import { Application, RequestHandler, Router } from "express";

export interface RegisterOptions {
  router?: {
    path?: string;
  };
  middlewares?: RequestHandler[];
}

export class Controller {
  protected app: Application;
  constructor(app: Application) {
    this.app = app;
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
    this.app.use(options?.router?.path || "/", router);
  }
}
