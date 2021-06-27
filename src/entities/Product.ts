import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { compileFunction } from "vm";

@Entity()
class Product {
  @ObjectIdColumn()
  id:ObjectID;

  @Column()
  name!:string;

  @Column()
  description!:string;

  @Column()
  price!:number;

  @Column()
  manufacturer!:string;

  @CreateDateColumn()
  created_at!:Date;

  @UpdateDateColumn()
  updated_at!:Date;

  constructor(name: string, description: string, price: number, manufacturer:string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.manufacturer = manufacturer
}

}

export {Product};