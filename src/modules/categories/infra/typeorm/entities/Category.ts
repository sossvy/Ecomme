import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "../../../../products/infra/typeorm/entities/Product";
@Entity("categoria")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Product, (produtos) => produtos.categoria)
  produtos: Product[];
}
