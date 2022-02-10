import { DeleteResult } from "typeorm";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
export default interface IClientRepository {
  create(data: IClientDTO): Promise<Client>;
  procura(ide: number): Promise<Client | undefined>;
  atualiza(cliente: IClientDTO, ide: number): Promise<Client | undefined>;
  listar(): Promise<Client[] | undefined>;
  remove(ide: number): Promise<any>;
}
