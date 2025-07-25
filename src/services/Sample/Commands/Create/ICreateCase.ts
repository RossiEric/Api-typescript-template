import { IDbProvider } from "../../../../repositories/IDbProvider";

export class CreateCase {
  constructor(private DbProvider: IDbProvider) {}

  async execute(data: Record<string, unknown>) {
    const response = await this.DbProvider.insert(data);
    return response;
  }
}
