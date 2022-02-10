import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/ClientRepository";
import { DeleteResult } from "typeorm";
export default class {
  public async execute(ide: number): Promise<string> {
    const repos = new ClientRepository();
    const resultado = await repos.remove(ide);
    if (resultado.affected >= 1) {
      return "banido";
    } else {
      return "não existe com esse id no banco de dados";
    }
  }
}
