import ProductRepository from "../infra/typeorm/ProductRepository";

export default class ReturnStockService {
  async execute(ide: number): Promise<number> {
    const repo = new ProductRepository();
    const estoq = await repo.prodEstq(ide);
    return estoq;
  }
}
