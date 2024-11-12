import { Application, Request, Response } from "express";
import { Controller, RegisterOptions } from "../assets/libs/Controller";

export class HelloController extends Controller {
  constructor(app: Application) {
    super(app);
  }

  public register(options?: RegisterOptions): void {
    this.registerWithRouter((router) => {
      router.get("/", this.hello.bind(this));
    }, options);
  }

  private hello(req: Request, res: Response) {
    res.send("Hello World!, from controller");
  }
}
