import { IDbProvider } from "../../IDbProvider";

export class SampleProvider implements IDbProvider {
  constructor() {
    //
  }

  async insert(data: any): Promise<string> {
    return `${data}`;
  }
}
