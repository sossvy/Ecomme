import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/ClientRepository";
export default class UpdateClientService {
  public async execute(
    cliente: IClientDTO,
    ide: number
  ): Promise<Client | undefined> {
    const clientRepository = new ClientRepository();
    const client = await clientRepository.atualiza(cliente, ide);
    return client;
  }
}
