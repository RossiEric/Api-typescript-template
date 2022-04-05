import { IDbProvider } from "../../../../repositories/IDbProvider";

export class CreateCase {
  constructor(private DbProvider: IDbProvider) {}

  async execute(data: any) {
    try {
      const response = await this.DbProvider.insert(data);

      return response;
    } catch (error) {
      return error;
    }
  }
}
