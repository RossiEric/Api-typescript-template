import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import HttpException from "./exceptions/HttpException";
import helperRoutes from "./routes/HelperRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(helperRoutes);

app.use((error: unknown, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof HttpException) {
    return response.status(error.status).json({ error: error.message });
  }
  return response.status(500).json({ error: "Internal error" });
});

app.use((request: Request, response: Response) => response.status(404).json({ error: "Not found" }));

export default app;
