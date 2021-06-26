import { type } from "os";
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
class User {
  
  @ObjectIdColumn()
  id: ObjectID;
  
  @Column()
  name!: string;
  
  @Column()
  email!: string;
  
  @Column({select: false})
  password!: string;
  
  @Column()
  admin!:boolean;  
  
  @CreateDateColumn()
  created_at!: Date;
  
  @UpdateDateColumn()
  updated_at!: Date;
  
  @Column(type => Product)
  favored: Product[];

}

export { User };