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

}

export {Product};