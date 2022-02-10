import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/ClientRepository";
import AppError from "../../../shared/errors/AppError";
export default class CreateClientService {
  public async execute(data: IClientDTO): Promise<Client> {
    const clientRepository = new ClientRepository();
    const client = await clientRepository.create(data);
    return client;
  }
}
