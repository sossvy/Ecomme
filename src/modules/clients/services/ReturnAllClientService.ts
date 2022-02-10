import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/ClientRepository";
export default class ReturnAllClientService {
  public async execute(): Promise<Client[] | undefined> {
    const clientRepository = new ClientRepository();
    const all = await clientRepository.listar();
    return all;
  }
}
