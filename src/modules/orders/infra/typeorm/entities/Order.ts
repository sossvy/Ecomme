import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Client from "../../../../clients/infra/typeorm/entities/Client";
import OrderProduct from "./OrderProduct";

@Entity("pedido")
export default class Order {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  cliente_id: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  status: string;

  @Column()
  forma_pagamento: string;

  @Column()
  valor: number;

  @Column()
  desconto: number;

  @ManyToOne(() => Client, (clientes) => clientes.pedidos)
  @JoinColumn({ name: "cliente_id" })
  cliente: Client;

  @OneToMany(() => OrderProduct, (pedidoProduto) => pedidoProduto.pedido, {
    cascade: true,
  })
  pedidoProduto: OrderProduct[];
}
