import ICategoryDTO from "../dtos/ICategoryDTO";
import CategoryRepository from "../infra/typeorm/CategoryRepository";
import Category from "../infra/typeorm/entities/Category";
import { getRepository, UpdateResult } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import { application } from "express";

export default class UpdateCategoryService {
  public async execute(ide: number, data: ICategoryDTO): Promise<UpdateResult> {
    const repos = new CategoryRepository();
    if (await repos.existeDescricao(data.descricao)) {
      throw new AppError("já existe categoria com essa descrição");
    } else {
      if (!(await repos.existeIdCategoria(ide))) {
        throw new AppError(
          "não existe categoria com esse id, por favor escolha outro"
        );
      } else {
        const ret = await repos.update(data, ide);
        return ret;
      }
    }
  }
}
