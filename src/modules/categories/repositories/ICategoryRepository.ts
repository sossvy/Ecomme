import { DeleteResult, UpdateResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
export default interface ICategoryRepository {
  create(data: ICategoryDTO): Promise<Category>;
  listar(): Promise<Category[]>;
  deletar(ide: number): Promise<DeleteResult>;
  update(data: ICategoryDTO, ide: number): Promise<UpdateResult>;
}
