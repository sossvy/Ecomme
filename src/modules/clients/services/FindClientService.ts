import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/ClientRepository";
import AppError from "../../../shared/errors/AppError";
export default class FindClientService {
  public async execute(ide: number): Promise<Client | undefined> {
    const clientRepository = new ClientRepository();
    const client = await clientRepository.procura(ide);

    if (!client) {
      throw new AppError(" não existe cliente com id: " + ide, 400);
    }

    return client;
  }
}
