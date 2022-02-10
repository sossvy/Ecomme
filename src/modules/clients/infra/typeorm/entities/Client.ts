import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Order from "../../../../orders/infra/typeorm/entities/Order";
@Entity("clientes")
export default class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Order, (pedido) => pedido.cliente)
  pedidos: Order[];
}
