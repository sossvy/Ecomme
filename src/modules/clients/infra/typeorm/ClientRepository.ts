import IClientDTO from "../../../../modules/clients/dtos/IClientDTO";
import IClientRepository from "../../../../modules/clients/repositories/IClientRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Client from "../typeorm/entities/Client";
export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;
  constructor() {
    this.ormRepository = getRepository(Client);
  }
  async create(data: IClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }

  async procura(ide: number): Promise<Client | undefined> {
    const client = this.ormRepository.findOne(ide);
    return client;
  }

  async atualiza(
    cliente: IClientDTO,
    ide: number
  ): Promise<Client | undefined> {
    this.ormRepository.update(ide, cliente);

    const ClienteQueSeraAtualizado = this.ormRepository.findOne(ide);

    return ClienteQueSeraAtualizado;
  }

  async listar(): Promise<Client[] | undefined> {
    const clients = this.ormRepository.find();

    return clients;
  }

  async remove(ide: number): Promise<any> {
    const resultadoBanimento = await this.ormRepository.delete(ide);

    return resultadoBanimento;
  }
}
