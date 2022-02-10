import IProductDTO from "../../dtos/IProductDTO";
import IProductRepository from "../../repositories/IProductRepository";
import Product from "./entities/Product";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import AppError from "../../../../shared/errors/AppError";
export default class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  async create(data: IProductDTO): Promise<Product> {
    const prod = this.ormRepository.create(data);
    return this.ormRepository.save(prod);
  }

  async listar(): Promise<Product[]> {
    const prods = this.ormRepository.find({
      relations: ["categoria"],
    });
    return prods;
  }
  async achaUm(ide: number): Promise<Product | undefined> {
    const prod = await this.ormRepository.findOne(ide, {
      relations: ["categoria"],
    });
    return prod;
  }

  async update(ide: number, data: IProductDTO): Promise<UpdateResult> {
    const resu = await this.ormRepository.update(ide, data);
    return resu;
  }

  async proTemNome(nome: string): Promise<boolean> {
    const prods = await this.ormRepository
      .createQueryBuilder("p")
      .where("p.nome = :n", { n: nome })
      .getMany();

    if (prods.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  async prodPrec(ide: number): Promise<number> {
    const prec = await this.ormRepository.findOne(ide);
    const preco = prec?.preco;
    if (typeof preco === "undefined") {
      throw new AppError("um produto não pode ser encontrado");
    }
    return preco;
  }

  async prodEstq(ide: number): Promise<number> {
    const prec = await this.ormRepository.findOne(ide);
    if (typeof prec?.quantidade !== "undefined") {
      return prec.quantidade;
    }
    throw new AppError("o produto com o id especificado não foi encontrado");
  }
}
