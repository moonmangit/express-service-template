import { Request, Response } from "express";
import { Controller, RegisterOptions } from "../assets/libs/Controller";
import { Context } from "../assets/libs/Context";

export class HelloController extends Controller {
  constructor(ctx: Context) {
    super(ctx);
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
