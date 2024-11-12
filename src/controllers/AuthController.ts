import { Application, Request, Response } from "express";
import { Controller, RegisterOptions } from "../assets/libs/Controller";

export class AuthController extends Controller {
  constructor(app: Application) {
    super(app);
  }

  public register(options?: RegisterOptions): void {
    this.registerWithRouter((router) => {
      router.post("/login", this.login.bind(this));
      router.post("/logout", this.logout.bind(this));
      router.post("/signup", this.signup.bind(this));
      router.get("/me", this.me.bind(this));
    }, options);
  }

  private login(req: Request, res: Response) {
    res.send("login");
  }
  private logout(req: Request, res: Response) {
    res.send("logout");
  }
  private signup(req: Request, res: Response) {
    res.send("signup");
  }
  private me(req: Request, res: Response) {
    res.send("me");
  }
}
