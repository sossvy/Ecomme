import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "../../../../products/infra/typeorm/entities/Product";
import Order from "./Order";

@Entity("pedidoProduto")
export default class OrderProduct {
  @PrimaryColumn()
  pedido_id: number;

  @PrimaryColumn()
  produto_id: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Order, (pedido) => pedido.pedidoProduto)
  @JoinColumn({ name: "pedido_id" })
  pedido: Order;

  @ManyToOne(() => Product, (produto) => produto.pedidoProduto)
  @JoinColumn({ name: "produto_id" })
  produto: Product;
}
