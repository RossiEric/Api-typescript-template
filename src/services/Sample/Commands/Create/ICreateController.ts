import { Request, Response } from "express";
import { CreateCase } from "./ICreateCase";

export class CreateController {
  constructor(private createCase: CreateCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.createCase.execute(request);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err || "Unexpected error.",
      });
    }
  }
}
