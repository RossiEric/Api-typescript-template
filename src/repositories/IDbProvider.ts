export interface IDbProvider {
  insert(data: any): Promise<string>;
}
