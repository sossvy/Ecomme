import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Category from "../../../../categories/infra/typeorm/entities/Category";
import OrderProduct from "../../../../orders/infra/typeorm/entities/OrderProduct";

@Entity("produto")
export default class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  categoria_id: number;

  @ManyToOne(() => Category, (categoria) => categoria.produtos)
  @JoinColumn({ name: "categoria_id" })
  categoria: Category;

  @OneToMany(() => OrderProduct, (pedidoProduto) => pedidoProduto.produto)
  pedidoProduto: OrderProduct[];
}
