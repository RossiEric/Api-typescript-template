import { Router, Request, Response } from "express";

const helperRoutes = Router();

helperRoutes.get("/health", (request: Request, response: Response) =>
  response.json({ status: "OK", timestamp: new Date() })
);

export default helperRoutes;
