import { UpdateResult } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import IProductDTO from "../dtos/IProductDTO";
import ProductRepository from "../infra/typeorm/ProductRepository";

export default class UpdateProductService {
  async execute(ide: number, data: IProductDTO): Promise<UpdateResult> {
    const repos = new ProductRepository();
    if (typeof (await repos.achaUm(ide)) === "undefined") {
      throw new AppError("não exixte produto com esse id");
    } else {
      return await repos.update(ide, data);
    }
  }
}
