import { Application, Request, Response } from "express";
import { Controller, RegisterOptions } from "../assets/libs/Controller";
import { PrismaClient } from "@prisma/client";

export class AuthController extends Controller {
  private prisma: PrismaClient;
  constructor(app: Application, prisma: PrismaClient) {
    super(app);
    this.prisma = prisma;
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
