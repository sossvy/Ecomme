import IOrderProductDTO from "./IOrderProductDTO";

export default interface IOrderDTO {
  id?: number;
  cliente_id: number;
  status: string;
  forma_pagamento: string;
  valor: number;
  desconto?: number;
  date: Date;
  pedidoProduto: IOrderProductDTO[];
}
