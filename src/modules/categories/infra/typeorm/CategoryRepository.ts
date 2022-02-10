import ICategoryDTO from "../../dtos/ICategoryDTO";
import ICategoryRepository from "../../repositories/ICategoryRepository";
import Category from "./entities/Category";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";

export default class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;
  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async create(data: ICategoryDTO): Promise<Category> {
    const categor = this.ormRepository.create(data);
    return this.ormRepository.save(categor);
  }

  async listar(): Promise<Category[]> {
    const categorias = await this.ormRepository.find();
    return categorias;
  }

  async deletar(ide: number): Promise<DeleteResult> {
    const banresult = await this.ormRepository.delete(ide);
    return banresult;
  }

  async update(data: ICategoryDTO, ide: number): Promise<UpdateResult> {
    const updateResult = await this.ormRepository.update(ide, data);
    return updateResult;
  }

  async existeIdCategoria(ide: number): Promise<Boolean> {
    const existe = await this.ormRepository.findOne(ide);
    if (typeof existe === "undefined") {
      return false;
    } else {
      return true;
    }
  }

  async existeDescricao(descri: string): Promise<boolean> {
    const categos = await this.ormRepository.find({
      where: {
        descricao: descri,
      },
    });

    if (categos.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
